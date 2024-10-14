import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const anotherElement=(
  <a href="https:google.com" target='_blank'>Visit Google</a>

)

const anotherUser="Noor aur React"

const reactElement=React.createElement(
  'a',
  {href:"https:google.com",target:'_blank'},
  'direct text click me',
  anotherUser
)
createRoot(document.getElementById('root')).render(
  // reactElement
  //anotherElement
  <App/>
)
