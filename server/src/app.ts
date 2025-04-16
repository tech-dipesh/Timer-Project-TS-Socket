import express from "express"
import {Server} from "socket.io"
import cors from "cors"
import { createServer } from "http"
import { callbackify } from "util"
import { eventNames } from "process"
const app=express()
const server=createServer(app)
app.use(cors())
// app.use()
const io=new Server(server, {
 cors:{ 
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
 }
})
io.on('connection', ('response': string)=>{
  console.log("connection is successfully made");
})

io.disconnectSockets('disconnect', ('disconne')=> {
  console.log("Disconencted successfully");
})

io.emit('client', ('clientMessage')=>{
  console.log(`clientMessage is ${clientMessage}`);
})
io.on(eventNames, callbackify)

const path=9999;
server.listen(path, ()=>{
  console.log(`Path is listening to http://localhost:${path}`);
})