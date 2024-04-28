import express from "express"
import dotenv from "dotenv"
import { connection } from "./db/connection"
import authRoutes from "./routes/authRoutes"
import jobRoutes from "./routes/jobRoutes"
import userRoutes from "./routes/userRoutes"
import chatRoutes from "./routes/chatRoutes"
import path from "path";
import { Server } from "socket.io"
import http from "http"
import { ChatDocument } from "./models/chatSchema"
import { UserType } from "./models/userSchema"

dotenv.config()

const Port = process.env.PORT

const app = express()

const server = http.createServer(app)

let io = new Server(server ,  {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',authRoutes)
app.use('/api/job',jobRoutes)
app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)



const __dirname1 = path.resolve()

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname1, "/client/dist")))

  app.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html"))
  })
}




io.on("connection", (socket)=>{
  console.log(`User Connected ${socket.id}`);

  socket.on("setup", (userdata)=>{
    socket.join(userdata._id)
    // console.log(userdata._id);
    socket.emit("connected")
  })

  socket.on("join-chat",(room)=>{
    socket.join(room)
    // console.log(`User Joined room : ${room}`);
  })

  socket.on('new-message', (newMessageRecieved: { chat: ChatDocument ; sender: UserType; content: string }) => {
    console.log(newMessageRecieved);
    
    var chat = newMessageRecieved.chat;
    console.log("Chat",chat);
    
  
    if (!chat.users) return console.log('chat.users not defined');

    // console.log(chat.users);
    
    chat.users.forEach(user => {
      if (user._id === newMessageRecieved.sender._id) {
        return;
      }
      
      io.to(user._id).emit("message received", newMessageRecieved);
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
})


connection.once('open',()=>{
    console.log('Connected to Database');
})



server.listen(Port , ()=>{
  console.log(`Listening on Port ${Port}`);
})
