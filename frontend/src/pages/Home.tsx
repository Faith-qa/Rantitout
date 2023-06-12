import React from "react";
import '../App.css';
import '../normal.css'
import { useState } from 'react';
import ChatMessage from '../components/ChatMessage';
import { useAuthContext } from "../hooks/useAuthContext";
import Login from "./Login";


const Home = () => {

    const {user} = useAuthContext();
    interface ChatMessageInterface{
      user: string;
      message: any;
    }
    const [input, setInput] = useState("")
    const [chatlog, setChatLog] = useState<ChatMessageInterface[]>([])
  
    
      
      
      async function handleSubmit(e: { preventDefault: any; }) {
        e.preventDefault();
        setChatLog([...chatlog, {user: "me", message: `${input}`}])
        setInput("");
        //const response = await fetch(`${process.env.}`)
      
    
      }

    return (
        <div className="App">       
            <aside className='sidemenu'>
            <div className='side-menu-button'>
            <span>+</span>
            New Chat
            </div>
        </aside>
        <section className= "chatbox">
            
            <div className='chat-log'>
            <ChatMessage message={{message: `${input}`}}/>
            </div>
            <div className="chat-input-holder">
            <form onSubmit={handleSubmit}>
            <input value={input}
            onChange={(event)=>setInput(event.target.value)}
            className='chat-input-textarea' 
            ></input>
            </form>

        </div>


      </section>
      </div>
    
    )
}

export default Home