import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate, useNavigation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  
  

  const logout = async()=>{
    localStorage.removeItem("user")
    navigate("/login")

  }
  return (
    <div className='navbar'>
      <span className='logo'>MeTalk</span>
      <div className="user">
        <img src={currentUser.imageUrl} alt="" />
        <span>{currentUser.name}</span>
        <button onClick={()=>logout()}>logout</button>
      </div>
    </div>
  )
}
