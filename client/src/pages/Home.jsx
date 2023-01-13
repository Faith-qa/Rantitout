import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Chat } from '../components/Chat'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
  const {user} = useAuthContext()
  const navigate = useNavigate()


  if (!user){
    navigate('/login')
  }
  
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>

        
      </div>

    </div>
  )
}
