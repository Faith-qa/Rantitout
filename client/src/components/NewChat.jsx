import React from 'react'
import AddIcon from '@mui/icons-material/Add';

import { useChats } from "../hooks/useChats";

export default function NewChat() {
   const {createChat} = useChats()

    const handleClick = async() =>{
        const date = new Date().toISOString()
        await createChat(date)
    }
  return (
    <div className="newChat" >
      new Chat
      <AddIcon onClick={handleClick}></AddIcon>
      
      
    </div>
  )
}
