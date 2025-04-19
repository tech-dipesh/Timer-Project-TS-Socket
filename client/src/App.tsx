import axios from 'axios'
import { useState } from 'react'

import React from 'react'
import io, { Socket } from 'socket.io-client'
function App: React.FC=() =>{
const [state, setstate] = useState(0)
const socket:Socket<ServerToTlientEvents, clientToServerEvents>=io({axios: {origin: "http://localhost:9999 ""}, withCredientials: true })
  interface increaMent{
    increase():()=>number
  }
  interface decreaMeent{
    decrease():()=>number
  }

  function increase(setincrease: increaMent){
    setstate+=1;
  }
  function decrease(setdecrease: decreaMent){
    setstate-=1;
  }

  return (
    <>
  <div>{value}</div>
  <div onClick={decrease}>+</div>
  <div onClick={increase}>-</div>
    </>
  )
}

export default App
