import React from 'react'
import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';


export const Search = () => {
  const [chatdate, setChatdate] = useState('');
  //const [chat, setChat] = useState(null)
  //const [err, setErr] = useState(false)

  const {handlesearch, chat, err} = useSearch()


  // console.log("hi", currentUser)

  //const userp = JSON.parse(localStorage.getItem('user'))
  //const cdate = new Date(chatdate)
  
  //const userid = userp._id




  
  const handleKey = e=>{
    e.code==="Enter" && handlesearch(chatdate);
  }

  // const handleSelect =async ()=>{
  //    console.log(chat.messages)

  // }

  return (
    <div className='search'>
      <div className="searchForm">
        <input type="date" onKeyDown={handleKey} onChange={e=>setChatdate(e.target.value)} value={chatdate}/>
      </div>
      {err && <span>chat not found</span>}
      {chat && <div className="userChat">
        <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="userChatInfo" onClick={console.log(chat.messages)}></div>
        <span>{chatdate}</span>
      </div>}
    </div>
  )
}
