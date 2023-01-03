import axios from 'axios';
import React from 'react'
import { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext'


export const Search = () => {
  const [chatdate, setChatdate] = useState('');
  const [user, setUserid ] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(AuthContext);

  console.log("hi", currentUser)

  const userp = JSON.parse(localStorage.getItem('user'))
  const cdate = new Date(chatdate)
  
  const userid = userp._id

  const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats/${userid}/${cdate}`;



  const handleSearch = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats/${userid}/${new Date(cdate).toISOString()}`;
    const theheaders = {
      headers: { Authorization: `Bearer ${userp.token}` },

    }
    console.log(theheaders)
      
    
    axios
      .get(url, theheaders)
      .then((res)=>{
        console.log(res.data)
        setChatdate(res.data)
        
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
      const res = await axios.get(`url/${userid}/${chatdate}`)

      if (!res) {
        const params = {messages:[], chatdate}
         await axios.post(url, 
        params)

        //create user chat
        

        
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
      {chatdate && <div className="userChat">
        <img src="https://images.pexels.com/photos/1967902/pexels-photo-1967902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        <div className="userChatInfo" onClick={handleSelect}></div>
        <span> 12/22/2022</span>
      </div>}
    </div>
  )
}
