import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://kaveeshaheshan:22334455@cluster0.bjk8o.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));

}