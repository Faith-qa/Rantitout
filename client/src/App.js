import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io();

function App() {
  //const [isConnected, setIsConnected] = useState(socket.connected);

  const {user} = useAuthContext()
  console.log("this is the user", user)

  // // useEffect(() => {
  // //   socket.on('connect', () => {
  // //     setIsConnected(true);
  // //   });

  // //   socket.on('disconnect', () => {
  // //     setIsConnected(false);
  // //   });
  // //   return () => {
  // //     socket.off('connect');
  // //     socket.off('disconnect');
  // //    // socket.off('pong');
  // //   };
  // }, []);

  
  const ProtectedRoute = ({children})=>{
    if(!user){
      console.log("hello")
      return <Navigate to="/login"/>
    }
    // console.log("hello", children)
    //console.log("connection successful" + isConnected)
    return children
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
            } 
            />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />



        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
