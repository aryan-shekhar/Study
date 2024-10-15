import React from 'react'
import { useState } from 'react'

function Pallette() {

  const[color,setColor]=useState('White')


  return (

  <div  className="w-full h-screen "style={{backgroundColor:color}}>  
    <div className= 'fixed left-0 right-0 bottom-0 bg-blue-500 text-white p-4 rounded-lg flex space-x-20 '>


      <button className='text-white bg-black rounded p-4 py-2 px-4' onClick={()=>setColor('Black')}>Black</button>
      <button className='text-white bg-green-500 rounded  p-4 py-2 px-4'  onClick={()=>setColor('Green')}>Green</button>
      <button className='text-white bg-pink-600 rounded p-4 py-2 px-4' onClick={()=>setColor('Pink')}>Pink</button>
      <button className='text-white bg-red-600 rounded p-4 py-2 px-4' onClick={()=>setColor('Red')}>Red</button>
      <button className='text-white bg-orange-500 rounded p-4 py-2 px-4' onClick={()=>setColor('Orange')}>Orange</button>
      <button className='text-white bg-violet-600 rounded  p-4 py-2 px-4' onClick={()=>setColor('Violet')}>Violet</button>
      <button className='text-white bg-lime-500 rounded p-4 py-2 px-4' onClick={()=>setColor('Lime')}>Lime</button>
      <button className='text-white bg-cyan-700 rounded p-4 py-2 px-4' onClick={()=>setColor('Cyan')}>Cyan</button>
      
    </div>
  </div>  
  )
}

export default Pallette