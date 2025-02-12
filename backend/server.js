import express from "express"; //this is used to import the express module
import cors from "cors"; //this is used to import the cors module
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js"; //this is used to import the foodRouter





//app config
const app = express()
const port = 4000 

//middleware
app.use(express.json()) //this is used to parse the json data from the frontend
app.use(cors())  //cors is used to allow the request from the frontend to the backend

//db conection
connectDb(); //this is used to connect the database

//api endpoints
app.use ("/api/food",foodRouter)


app.get("/", (req,res)=>{
    res.send("API Working") //this is used to check if the api is working or not

})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`) //this is used to start the server
})

//mongodb+srv://kaveeshaheshan:22334455@cluster0.bjk8o.mongodb.net/?