import React, { useState, useEffect } from 'react'
import { Message } from './Message'
import { useChatContext} from "../hooks/useChatContext";


export const Messages = () => {
  const [messages, setMessages] = useState([])
  const {_messages, chat_date} = useChatContext()

  useEffect(()=>{
    const unSub = async(chat_date) =>{ 
      await chat_date && setMessages(_messages)
      console.log(messages)
      return messages

    }
    return () => {
      unSub()
    }
    
  }, [chat_date])


  //console.log('Hello', messages)
  return (
    <div className='messages'>
      {messages.map(m=>(
        <Message message={m} key = {m._id}/>
      ))}
      
    </div>
  )
}
