import foodModel from "../models/foodModel.js"; //this is used to import the foodModel
import fs from "fs"; //this is used to import the file system module



//add food item

 const addFood = async (req,res) => { 
    let iamge_filename = `${req.file.filename}`; //this is used to get the image file name
     const food = new foodModel({
        name: req.body.name, //this is used to get the name from the frontend
        description: req.body.description, //this is used to get the description from the frontend
        price: req.body.price, //this is used to get the price from the frontend
        category: req.body.category, //this is used to get the category from the frontend
        image: iamge_filename //this is used to get the image from the frontend

     })

 }

 export {addFood} //this is used to export the addFood function