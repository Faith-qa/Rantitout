import axios from "axios";
import { createContext, useState, useEffect } from "react";



const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users`;

export const AuthContext = createContext()

export const AuthontextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        const authorized = () =>{
            const user =  localStorage.getItem("user")!= null;
            setCurrentUser(user)
        
        
    }
        return authorized()
    }, []);

    return(

    <AuthContext.Provider value={{currentUser}}>
        {children}
         
    </AuthContext.Provider>
    )
}