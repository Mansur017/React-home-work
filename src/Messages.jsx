import React, { Fragment, useState } from "react";




function Messages() {

const [messages, setMessages] = useState([
    {
        text: "Hello!",
        author: "Adam",
        side: "left"
    },
    {
        text: "Hi!",
        author: "Ali",
        side: "right"   
    },
    {
        text: "How are you?",
        author: "Adam",
        side: "left"
    },
    {
        text: "I'm fine",
        author: "Ali",
        side: "right"
    },
        
    ])

const deleteMessage = (index) => {
const messageCopy = [...messages]
messageCopy.splice(index, 1)
setMessages(messageCopy)
        
}


return(

    <div className="container">
   { messages.map((message , index)=> {
        return (
        < Fragment key={index}>
            <div className={`sms-${message.side}`} >
                 <p>{message.text}</p>
                <span>{message.author}</span>
                <button onClick={deleteMessage} className="btn">X</button>
            </div>
        </ Fragment>
        )
    }
    )}
    </div>



)
    
}
export default Messages 