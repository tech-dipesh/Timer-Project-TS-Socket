import { useState, useEffect, useRef } from 'react'
import React from 'react'
import io, { Socket } from 'socket.io-client'

const App: React.FC =() =>{
  // const socket:Socket<ServerToClientEvents, clientToServerEvents>=io( "http://localhost:9999",{ withCredentials: true,   transports: ['websocket'],})
const [state, setState] = useState<number>(0)


// interface ServerToClientEvents{
//   update: (value: number)=>void
// }
// interface clientToServerEvents {
//   increament:()=>void;
//   decreament:()=>void;
// }


const socketRef = useRef<Socket | null>(null)

useEffect(() => {
  socketRef.current = io("http://localhost:9999", {
    withCredentials: true,
    transports: ["websocket"],
  })

  const socket = socketRef.current

  socket.on("update", (newValue) => {
    setState(newValue)
  })

  return () => {
    socket.off("update")
    socket.disconnect()
  }
}, [])


  
  const increase=()=>{
    //backend sets the server
    // setState(prev =>prev+1)
    socketRef?.current?.emit('increament')
  }
  const decrease=()=>{
    //backend sets the server
    // setState(prev=>prev-1)
    socketRef?.current?.emit("decreament")
  }
 
  return (
    <>
  <div>The current value: {state}</div>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
    </>
  )
}

export default App
