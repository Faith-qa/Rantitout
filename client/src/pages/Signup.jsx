import React from 'react'
import '../styles.scss'
import Add from '../img/addAvatar.png'

export const Signup = () => {
  return (
    <div className='formContainer '>
        <div className="formWrapper">
            <span className='Logo'> Welcome to Rant It Out </span>
            <span className='title'>Sign Up</span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder="password"/>
                <input style={{display: 'none'}} type="file" id="file"/>
                <label htmlFor='file'>
                    <img src={Add} alt=""/>
                    <span>Add an Avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p> you have an account? Login </p>

        </div>

    </div>
  )
}
