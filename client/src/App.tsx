import { useState, useEffect } from 'react'

import React from 'react'
import io, { Socket } from 'socket.io-client'
const App: React.FC =() =>{
const [state, setState] = useState<number>(0)
interface ServerToTlientEvents{
  update: (value: number)=>void
}
interface clientToServerEvents {
  increament():()=>void;
  decreament():()=>void;
}

const socket:Socket<ServerToTlientEvents, clientToServerEvents>=io( "http://localhost:9999 ",{ withCredentials: true })

  useEffect(() => {
    socket.on('update', (newValue: number)=>{
        setState(newValue)
    })
    return (()=>{
      socket.off("update")
    })
  },[])
  
  const increase=()=>{
    setState(prev =>prev+1)
    socket.emit('increament')
  }
  const decrease=()=>{
    setState(prev=>prev-1)
    socket.emit("decreament")
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
