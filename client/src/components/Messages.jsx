import React, { useState, useEffect } from 'react'
import { Message } from './Message'
import { useChatContext} from "../hooks/useChatContext";


export const Messages = () => {
  const [messages, setMessages] = useState([])
  const {_messages, chat_date} = useChatContext()
  console.log("this is the chatdate", _messages)


  useEffect(()=>{
    
    const unSub = ()=>{
      if(chat_date) {
        setMessages(_messages)
      }
    };
    unSub();
    
  }, [chat_date, _messages])


  console.log('Hello', messages)
  return (
    <div className='messages'>
      {messages.map(m=>(
        <Message message={m} key = {m._id}/>
      ))}
      
    </div>
  )
}
