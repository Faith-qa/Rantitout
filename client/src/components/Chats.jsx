import React, {useState, useEffect} from 'react'

import { useChats } from '../hooks/useChats'
import { useAuthContext } from '../hooks/useAuthContext'

export const Chats = () => {

  const {loadChats, chats, err} = useChats();
  const {user} = useAuthContext();

  useEffect(()=>{
    user._id && loadChats();
    console.log("love", JSON.stringify(chats))
    

  }, [user._id])


  if (chats) {
    var chaats =  JSON.stringify(chats)
    console.log(chats)
  }

  


  return (
    <div className='chats'>
      {Object.entries(chats) ?.map((chat)=>{
        <div className="userChat">
        <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="userChatInfo"></div>
        <span>{chat.date}</span>
        <p>hello faith</p>
  </div>
    

      })}
      

        
        
      
      
    </div>
  )
}
