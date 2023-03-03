import React, { useState, useEffect } from 'react'
import { Message } from './Message'
import { useChatContext} from "../hooks/useChatContext";
import { useChats } from "../hooks/useChats";

export const Messages = () => {
  const [messages, setMessages] = useState([])
  const {_messages, chat_date} = useChatContext()
  const {loadMessages, } = useChats()
  //console.log("this is the chatdate", _messages)


  useEffect(()=>{
    // const interval = setInterval(() => {
    //   loadMessages(chat_date).then(()=>{
    //     setMessages(_messages)
    //   })
  
    // }, 10)

    // return ()=> clearInterval(interval)
    
    const unSub = async()=>{
      if(chat_date && _messages) {
        loadMessages(chat_date).then(()=>{
          setMessages(_messages)
        })
    };
  }
    
    unSub()
    
}, [_messages, chat_date, loadMessages])


  //console.log('Hello', messages)
  return (
    <div className='messages'>
      {messages.map(m=>(
        <Message message={m} key = {m._id}/>
      ))}
      
    </div>
  )
}
