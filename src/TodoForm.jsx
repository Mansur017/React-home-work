import React, {useState} from 'react'
import { AiOutlinePlus } from "react-icons/ai";


export default function TodoForm({todos,setTodos}) {

    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addTask()
        }
    }

    const addTask = () => {
        if (text) {
            const todosCopy = [...todos];
            todosCopy.push(text);
            setTodos(todosCopy);
            setText("")  
        }
    }

  return (
    <div className="input-container">
        <button onClick={() => (addTask())}>
            <AiOutlinePlus className="icon"/>
        </button>
        <input type="text" value={text}  onKeyDown={handleKeyPress} onChange={handleChange} placeholder="Новая задача" />
    </div>
  )
}
