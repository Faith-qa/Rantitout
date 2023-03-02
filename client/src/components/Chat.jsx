import React from 'react'
import Add from '../img/add.png'
import More from '../img/more.png'
import Cam from '../img/cam.png'
import  {Messages}  from './Messages'
import {Input}from './Input'
import { useChatContext} from "../hooks/useChatContext";


export const Chat = () => {
  const {chat_date} = useChatContext()

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{chat_date ? chat_date: new Date().toISOString()}</span>
        <div className="chatIcons">
          <img src={Cam} alt = ""/>
          <img src={Add} alt=""/>
          <img src={More} alt=""/>
          
        </div>
      </div>
      <Messages/>
      <Input/>

    </div>
  )
}
