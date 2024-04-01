import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import mongoose from 'mongoose'
import * as AdminJSMongoose from '@adminjs/mongoose'
import Article from './models/article.js'
import { Components, componentLoader } from './component-loader.js'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import Admin from './models/admin.js'
import bodyParser from "body-parser"
import bcrypt from "bcrypt"
import cors from "cors"
import multer from 'multer'
import Order from './models/order.js'


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../Frontend/ecom/public/images/')
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname);
  }
})

const upload = multer({ storage: storage })



const maxSizes = ["0","1","2","3","4","5"]


const PORT = 5000

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
  })

const start = async () => {
  const app = express()
  app.use(cors());
  app.use(express.json());
  await mongoose.connect('mongodb://127.0.0.1:27017/stageEcomm')
  app.use(bodyParser.urlencoded({ extended: false }))

  const adminOptions = {
    rootPath: '/admin',
    // We pass Category to `resources`
    resource: Article,
    options:{
        properties: {
            ["mainSize.image"]: {
              isVisible: false,
            },
            image:{
                components: {
                    show: Components.MyInput, // this is our custom component
                  },
            }
        }
    }
  }

  const orderOptions = {
    resource: Order,
    options:{
      properties: {
        sendMessage:{
          components: {
            show: Components.SendMessage
          }
        }
      }
    }
  }

  const admin = new AdminJS({
    resources: [adminOptions,Admin,Order],
    componentLoader,
  })

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use('/admin', adminRouter)


  app.post("/findAdmin", async function (req,res){
  
    const data = req.body;
    const admin = await Admin.findOne({username: data.username});
    if(!admin){
      //res.send("Wrong credentials")
      console.log("Wrond credentials")
      return
    }
    const isCorrect = await bcrypt.compare(data.password,admin.password);
    if(!isCorrect){
      //res.send("Wrong Password");
      console.log("Wrong Password")
      return
    }
    res.send(admin);
  })

  app.post("/uploadImages",upload.array("allImages"),async function(req,res){
    //  console.log(req.body.imageId);
     const allImages = [];
   for (var i=0;i<req.files.length;i++){
    allImages.push(req.files[i].filename);
   }
  //  console.log(allImages);
    // console.log(req.body.articleId);
    try{
      const article = await Article.findOne({_id: req.body.articleId});
      // console.log(article);
        for (let index = 0; index < req.body.imageId.length; index++) {
          if(req.body.imageId[index] === "0"){
            article.mainSize.image = allImages[index];
          }
        }
      
        for (let i = 0; i < article.sizes.length; i++) {
          for (let j = 0; j < req.body.imageId.length; j++) {
            if(article.sizes[i]._id.toString() === req.body.imageId[j]){
              article.sizes[i].image = allImages[j];
            } 
          } 
        }
         article.save();
        //  console.log(article);
    }
    catch(error){
      console.log(error)
    }

  })

  app.get("/getAllArticles",async function (req,res){
    try {
      const result = await Article.find({});
      res.send(result);
    } catch (error) {
      console.log(error);
        }
  })

  app.get("/specificArticle",async function (req,res){
    try {
      const result = await Article.findOne({_id: req.query.id})
      res.send(result);
    } catch (error) {
      console.log(error)
    }
  });


  app.post("/addOrder", async function (req,res){
    try {
    const order = req.body;

    let articles = [];

    order.articles.map((article)=>{
      articles.push({
        title: article.title,
        size: article.size,
        price: article.price,
        quantity: article.quantity,
      })
    })
    
    const newOrder = new Order ({
      prenom: order.data.prenom,
      nom: order.data.nom,
      wilaya: order.wilaya,
      commune: order.data.commune,
      tel: order.data.tel,
      email: order.data.email,
      articles: articles,
      totalPrice: order.total,
    })

    newOrder.save();

    res.send({
      success: true,
      message: "Order added successfully"
    })

  } catch (error) {
      console.log(error);
  }

  })


  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()