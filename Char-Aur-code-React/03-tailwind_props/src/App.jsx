import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Child from './components/Child'


function App() {
  let myObj={
    name:"aryan",
    age:21
  }

  let arr=[1,2,3]

  const[message,setMessage]=useState('')

  const handleMessage=(msg)=>{
    setMessage(msg)
  }

  return (
    <>
      <h1  className='bg-green-500 text-black p-4 rounded-xl' >Tailwind Test</h1>
      <Card username="cheetah" price="9129" someobject={myObj} newArray={arr}/>
      <Card username="Chimpanzee" price="200"/>

      {/* This is to Send prop from Child to Parent */}
      <div>
        <h2>Message from Parent Component</h2>
        <p>the Message from child is {message}</p>
        <Child onSendMessage={handleMessage}/>
      </div>
      
    </>
  )
}

export default App
