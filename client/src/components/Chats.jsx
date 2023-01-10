import React, {useState, useEffect} from 'react'

import { useChats } from '../hooks/useChats'
import { useAuthContext } from '../hooks/useAuthContext'

export const Chats = () => {

  const {loadChats, chats, err} = useChats();
  const {user} = useAuthContext();

  useEffect(()=>{
    user._id && loadChats();
    

  }, [user._id])

  {Object.entries(chats) ?.map((chat) => {
    console.log("hello", chat)
  }).map((minichat)=>{
    console.log(minichat)
  })}

  console.log(Object.entries(chats))




  return (
    <div className='chats'>
      {Object.entries(chats)?.map((chat) =>(
        <div className="userChat">
        <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="userChatInfo"></div>
        <span>chat.date</span>
        <p>hello faith</p>
      </div>
        
      ))}
      
      
    </div>
  )
}
