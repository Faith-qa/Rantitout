import  {useState, } from "react";

import { useAuthContext } from "./useAuthContext";

export const useChats = () => {
    const {user} = useAuthContext();

    const url = `${process.env.REACT_APP_API_URL}/api/v1/chats/${user._id}`;

    const createChat = async(date: any) => {
        try{
            const response = await fetch(url + `/${date}`,{
                method: 'POST',
                headers: {Authorization: `Bearer ${user.token}`, 'Content-Type': 'Application/json'},
                body: JSON.stringify({date})
            })
            const json = await response.json();
            console.log('hello world', json)
            return json;
    
        }catch(err){console.log(err)}
    }

    return {createChat}
}