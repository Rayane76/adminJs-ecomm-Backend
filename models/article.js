import mongoose from "mongoose";


const ArticleSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mainSize: {
        title: {
          type: String,
          required: true,
        },
        priceBefore: Number,
        priceNow: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
        },
    },
    sizes: [
        {
            title: {
                type: String,
                required: true,
            },
            priceBefore: Number,
            priceNow: {
              type: Number,
              required: true,
            },
            image: {
                type: String,
            },
        }
    ]
},
{ timestamps: true },
)


const Article =
  mongoose.models.Articles || mongoose.model("Articles", ArticleSchema);

export default Article;
