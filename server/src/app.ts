import express from "express"
import {Server} from "socket.io"
import cors from "cors"
import { createServer } from "http"

const app=express()
const httpServer=createServer(app)
app.use(cors())
// app.use()
const io=new Server(httpServer, {
 cors:{ 
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
 }
})
interface clientType{
  clientMessage: string
}
io.on("connection", (socket)=>{
  console.log("connection is successfully made.");
  socket.on('chat', (message: string)=>{
    console.log("Recieve message is:", message);
    // io.on("ressponse", message) //this is not corerct i am trying to understand why is the error.
    // emit.on("response", message)
    socket.emit("response", "Message recieved fro ${message}")
  })
  socket.on("client", (clientMessage: clientType)=>{
    console.log("Client message that he is sending is:", clientMessage);
  })

  socket.on('disconnect', ()=> {
    console.log("Disconencted successfully");
  })
  
  // socket.emit('client', ('clientMessage'):string=>{
  //   console.log(`clientMessage is ${clientMessage}`);
  // })
  // socket.on(eventNames, callbackify)
})
const path=9999;
httpServer.listen(path, ()=>{
  console.log(`Path is listening to http://localhost:${path}`);
})