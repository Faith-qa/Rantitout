import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Chat } from '../components/Chat'
import { useAuthContext } from '../hooks/useAuthContext'



export const Home = () => {
  const {user} = useAuthContext()
  

  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>

        
      </div>

    </div>
  )
}
