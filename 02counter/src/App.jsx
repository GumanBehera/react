import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
  
  const addValue = () =>{
    setcounter(counter+1)
  }
  
  const removeValue = () =>{
    setcounter(counter - 1)
  }
  
  return (
    <>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <button onClick={removeValue}>Remove Value</button>
     </>
  )
}

export default App
