import React, { useState, useEffect } from "react";

import { useChats } from "../hooks/useChats";
import { useAuthContext } from "../hooks/useAuthContext";
import { useChatContext} from "../hooks/useChatContext";

export const Chats = () => {
  const { loadChats, chats,  } = useChats();
  const {dispatch} = useChatContext()
  const { user } = useAuthContext();
  const [_chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async() => {
      if (user._id ){
        await loadChats().then(()=>{
        setChats(chats)

      }).catch((err)=>{
        console.log(err) 
      })


    }}
    getChats()

    

  }, [user._id, loadChats, chats]);

  const handleSelect = (ch)=>{
    dispatch({type: "CHANGE_DATE", payload: ch})
  }

  return (
    <div className="chats">

    {_chats.map((chat) => {
      return (
        <div key={chat._id} className="userChat" onClick={()=>handleSelect(chat)}>
          <img
            src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="userChatInfo"></div>
          <span>{chat.date}</span>
        </div>
      );
    })}
    
  </div>
);
}
