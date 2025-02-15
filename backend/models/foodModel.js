import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name: {type:String,required:true}, 
    description: {type:String,required:true}, //this is used to get the description from the frontend
    price: {type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true},
})

const foodModel = mongoose.models.food || mongoose.model("Food",foodSchema);

export default foodModel;