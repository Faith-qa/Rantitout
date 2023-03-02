import React from 'react'
import Add from '../img/avator.jpeg'
import { useChatContext} from "../hooks/useChatContext";

export const Message = ({message}) => {
  const {_messages, chat_date} = useChatContext()

  console.log("these are :", message)
  return (
    <div className='message owner'>
        <div className="messageInfo">
            <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            <span>just now</span>
        </div>
        <div className='messageContent'>
            <p>{message.chat1}</p>
            <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""   />
        </div>
    </div>
  )
}
