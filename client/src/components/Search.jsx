import axios from 'axios';
import React from 'react'
import { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext'

const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats`;

export const Search = () => {
  const [chatdate, setChatdate] = useState("");
  const [date, setDate] = useState(null);
  const [err, setErr] = useState(false);
  const [messages, setMessages] = useState('')
  const {currentUser} = useContext(AuthContext)

  const userid = currentUser._id



  const handleSearch = () => {
    

    axios
      .get(`url/${userid}/${chatdate}`)
      .then((res)=>{
        console.log(res.data)
        setDate(res.data)
        
      })
      .catch((err)=>{
        setErr(true)
      })


  };
  const handleKey = e=>{
    e.code==="Enter" && handleSearch();
  }

  const handleSelect =async ()=>{
    // check weather the group exists or not(chats collection)
    //if not create a new one
    try {
      const res = await axios.get(`url/${userid}/${date}`)

      if (!res) {
        const params = {messages, date}
        const res = await axios.post(`url/${userid}/${date}`, 
        params)
      }
      
    }catch (err){
      console.log(err)
    }

  }

  return (
    <div className='search'>
      <div className="searchForm">
        <input type="date" onKeyDown={handleKey} onChange={e=>setChatdate(e.target.value)}/>
      </div>
      {err && <span>Chat not found</span>}
      {date && <div className="userChat">
        <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="userChatInfo" onClick={handleSelect}></div>
        <span> 12/22/2022</span>
      </div>}
    </div>
  )
}
