import React from 'react'
import { useChats } from "../hooks/useChats";


export default function CreateNew() {
    const {createChat} = useChats()
    const handleClick = async() => {
        const date = new Date()
        return await createChat(date)
    }

  return (
    <div >
        <button onClick={handleClick}>+</button>
    </div>
  )
}
