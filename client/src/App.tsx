import axios from 'axios'
import { useState } from 'react'

import React from 'react'
import io, { Socket } from 'socket.io-client'
function App: React.FC=() =>{
const [value, setvalue] = useState(null)
const socket:Socket<ServerToTlientEvents, clientToServerEvents>=io({axios: {origin: http://localhost:9999}})
  interface increaMent{
    increase():()=>number
  }
  interface decreaMeent{
    decrease():()=>number
  }
  return (
    <>
  <div></div>
  <div>+</div>
  <div>-</div>
    </>
  )
}

export default App
