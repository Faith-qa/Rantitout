import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Chat } from '../components/Chat'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
//import { useState } from 'react'
import useTheme from '../hooks/useThemeContext'

export const Home = () => {
  const {user} = useAuthContext()
  const navigate = useNavigate()
  //const [darkMode, setDarkMode] = useState(true)
  const theme = useTheme()
  if (!user){
    navigate('/login')
  }
  
  return (
    <div className='home'  style={{
      backgroundColor: theme.dark ? "#333" : "#a7bcff",
      color: theme.dark ? "#eee" : "#333",
    }}>
      <div className="container">
        <Sidebar/>
        <Chat/>

        
      </div>

    </div>
  )
}
