import React from 'react';
import logo from './logo.svg';
import './App.css';
import './normal.css'
import { useState } from 'react';
import ChatMessage from './components/ChatMessage';
import Home from './pages/Home';
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./pages/Login";

function App() {
  //add state forv input and chat log
  const {user} = useAuthContext();

  
  return (
    <div className="App">
      <Login/>

    </div>
  );
}

export default App;
