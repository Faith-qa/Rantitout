import React from 'react'
import '../styles.scss'
import Add from '../img/addAvatar.png'

export const Login = () => {
  return (
    <div className='formContainer '>
        <div className="formWrapper">
            <span className='Logo'> Welcome to Rant It Out </span>
            <span className='title'>Log in</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder="password"/>
                
                <button>Sign in</button>
            </form>
            <p> you don't have an account? Sign up! </p>

        </div>

    </div>
  )
}
