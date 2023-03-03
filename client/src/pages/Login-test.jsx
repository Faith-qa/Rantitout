import React from 'react'
import '../styles.scss'
//import Add from '../img/addAvatar.png'
import axios from "axios";
import { useState, useRef } from 'react';
import { useNavigate, Link} from 'react-router-dom'
import { useLogin } from '../hooks/useLogin';


const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users/login`;
console.log(url)

export const Login = () => {
  const navigate = useNavigate()
  const {login, error, isLoading} = useLogin()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  //const [err, setErr] = useState(false)

  const handleSubmit=async(e) => {
    e.preventDefault();

    try{
      await login(email, password)
      navigate("/")
    }catch(err){
      console.log(error)
    }
  

  };
  
  return (
    <div className='formContainer '>
        <div className="formWrapper">
            <span className='Logo'> Welcome to Rant It Out </span>
            <span className='title'>Log in</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="password" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                
                <button disabled={isLoading}>Sign in</button>
                {error && <span>{error}</span>}
            </form>
            <p> you don't have an account? <Link to="/signup">Sign up! </Link></p>

        </div>

    </div>
  )
}
