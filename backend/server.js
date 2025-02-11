import express from "express"; //this is used to import the express module
import cors from "cors"; //this is used to import the cors module





//app config
const app = express()
const port = 4000 

//middleware
app.use(express.json()) //this is used to parse the json data from the frontend
app.use(cors())  //cors is used to allow the request from the frontend to the backend


app.get("/", (req,res)=>{
    res.send("API Working") //this is used to check if the api is working or not

})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`) //this is used to start the server
})
