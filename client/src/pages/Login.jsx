import React from 'react'
import '../styles.scss'
//import Add from '../img/addAvatar.png'
import axios from "axios";
import { useState, useRef } from 'react';
import { useNavigate, Link} from 'react-router-dom'



const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users/login`;
console.log(url)

export const Login = () => {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(false)

  const handleSubmit=(e) => {
    e.preventDefault();
  
  const user = {email, password}
  
    axios
    .post(url, user)
    .then((res)=>{
      localStorage.setItem("user",JSON.stringify(res.data));
      navigate("/");

      console.log(res.data);

    }).catch((err)=>{
      setErr(true);
      console.log(err)
    })

  

  };
  
  return (
    <div className='formContainer '>
        <div className="formWrapper">
            <span className='Logo'> Welcome to Rant It Out </span>
            <span className='title'>Log in</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="password" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                
                <button>Sign in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p> you don't have an account? <Link to="/signup">Sign up! </Link></p>

        </div>

    </div>
  )
}
