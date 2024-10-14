import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  
  const addValue=()=>{
    
    setCount((prev)=>{ 
      if(prev===20)return prev
      else return prev+1})
  }

  const remValue=()=>{
    setCount((prev)=> {
      if(prev===0) return prev
      else return prev-1})
  }

  const reset=()=>{
    setCount((prev)=>{ return 0})
  }



  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value:{count}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={remValue}>Remove Value</button>
    <br />
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
