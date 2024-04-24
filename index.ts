import express from "express"
import dotenv from "dotenv"
import { connection } from "./db/connection"
import authRoutes from "./routes/authRoutes"
import jobRoutes from "./routes/jobRoutes"
import userRoutes from "./routes/userRoutes"
import path from "path";

dotenv.config()

const Port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',authRoutes)
app.use('/api/job',jobRoutes)
app.use('/api/user',userRoutes)


const __dirname1 = path.resolve()

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname1, "/client/dist")))

  app.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html"))
  })
}


app.listen(Port, ()=>{
    console.log(`Server Started on Port : ${Port}`);
})


connection.once('open',()=>{
    console.log('Connected to Database');
})





