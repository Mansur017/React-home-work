import React, { useState } from "react";
import Messages from "./Messages"


function App() {


  const [todos, setTodos] = useState([
    {
      text: "Html"
    },    
    {
      text: "Html"
    },    
    {
      text: "Html"
    },
  ])


const [text, setText] = useState("")


function handleChange(e) {
  setText(e.target.value)
  
}
function handleBtn(e){
  setText("")
  setTodos([
    ...todos,
    {
    text: text

    }])
}

  return (
    <div className="container">
          <>
      <input placeholder="text"   value={text}   onChange={handleChange}/>
      <button  onClick={handleBtn} > btn</button>
          </>
      {
        todos.map( (item , index) => {
          return(
            <div key={index}> 
              {item.text}
            </div>
          )
        })
      }

    </div>

  )
    

}

export default App;