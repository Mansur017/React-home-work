import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

export default function Todo({index,todo,removeTask}) {

    return (
        <div className="todo">
            {todo}
            <button onClick={() => (removeTask(index))}>
                <IoCloseSharp className="icon"/>
            </button>
        </div>
    )
}
