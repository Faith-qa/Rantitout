import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate, useNavigation } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'


import { useAuthContext } from '../hooks/useAuthContext'

export const Navbar = () => {
  const {user} = useAuthContext()

  const {logout} = useLogout()
  const navigate = useNavigate()
  
  
  const handleClick = () => {
    logout()
    navigate('/login')

  }

  
  return (
  
    <div className='navbar'>
      <span className='logo'>MeTalk</span>
      {user && (
        <div className="user">
        <img src={user.imageUrl} alt="" />
        <span>{user.name}</span>
        <button onClick={handleClick}>logout</button>
      </div>
      )}
      
    </div>
  )
}
