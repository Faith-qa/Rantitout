import React, { useState, useEffect } from "react";

import { useChats } from "../hooks/useChats";
import { useAuthContext } from "../hooks/useAuthContext";
import { useChatContext} from "../hooks/useChatContext";
import { Messages } from "./Messages";

export const Chats = () => {
  const { loadChats, chats, err } = useChats();
  const {dispatch} = useChatContext()
  const { user } = useAuthContext();
  const [_chats, setChats] = useState([]);
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    const getChats = async() => {
      if (user._id) {
        await loadChats().then(()=>{
          setChats(chats)
        }).catch(()=>{
          alert("error")
        })
        

      }
    };
  
    getChats();

  }, [user._id])

  const handleSelect = (ch)=>{
    dispatch({type: "CHANGE_DATE", payload: ch})
  }
console.log(_chats)
  return (
    <div className="chats">
    {_chats.map((chat) => {
      return (
        <div className="userChat" onClick={()=>handleSelect(chat)}>
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
