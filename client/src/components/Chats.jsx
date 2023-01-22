import React, { useState, useEffect } from "react";

import { useChats } from "../hooks/useChats";
import { useAuthContext } from "../hooks/useAuthContext";

export const Chats = () => {
  const { loadChats, chats, err } = useChats();
  const { user } = useAuthContext();
  const [_chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = async() => {
      user._id && await loadChats(setChats);

      setChats([chats]);

    }

    getChats();
  }, [chats]);

  return (
    <div className="chats">
      {Object.entries(_chats)?.map((chat) => {
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="userChatInfo"></div>
          <span>{chat.date}</span>
          <p>hello faith</p>
        </div>;
      })}
    </div>
  );
};