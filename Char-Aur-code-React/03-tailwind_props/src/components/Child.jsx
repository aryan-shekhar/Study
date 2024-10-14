import React from 'react'

function Child({onSendMessage}) {

    const settingMsg=()=>{
        onSendMessage("Hi from Child")
    }

  return (
    <div>
       <h2>Child</h2>
       <button onClick={settingMsg}>Click Me</button>

    </div>
  )
}

export default Child