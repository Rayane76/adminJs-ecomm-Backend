import mongoose from "mongoose";


const OrderSchema = mongoose.Schema({

    prenom: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true
    },
    wilaya:{
      type: String,
      required: true
    },
    commune: {
        type: String,
        required: true,
    },
    tel:{
        type: String,
        required: true
    },
    tel2:{
        type: String,
    },
    articles: [{
       title: {
          type: String,
          required: true,
    },
       size: {
          type: String,
          required: true,
    },
       price: {
         type: Number,
         required: true,
       },
       quantity: {
        type: Number,
        required: true,
       },
    }],
    totalPrice:{
        type: Number,
        required: true,
    },
    confirmed: {
        type: Boolean,
    }
},{timestamps: true});


const Order = mongoose.models.Orders || mongoose.model("Orders",OrderSchema);

export default Order;