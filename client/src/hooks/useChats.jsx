import React, {useState, useEffect} from "react";

import { useAuthContext } from "./useAuthContext";
import { useChatContext } from "./useChatContext";

export const useChats = () => {
    const [chats, setChats] = useState([]);
    const [err, setErr] = useState(null);

    const {user} = useAuthContext();
    //const {dispatch} = useChatContext()
    const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats/${user._id}`;

    // useEffect(()=>{
    //     LoadChats()
    //     console.log(chats)
    // }, [chats])
    const loadChats = async()=>{
       const res = await fetch(url, {
        method: 'GET',
        headers: {Authorization: `Bearer ${user.token}`, 'Content-Type': 'Application/json'},
       })
       const res_json = await res.json()
       console.log(res_json)
       setChats(res_json)





    }

    const updateChat = async(cDate, text) => {
        setErr(null)
        console.log(url +`/${cDate}`)

        try{
            //update chats on date
            const response = await fetch(url +`/${cDate}`, {
                method: 'PUT',
                headers: {Authorization: `Bearer ${user.token}`, 'Content-Type': 'Application/json'},
                body: JSON.stringify({text})
            })

            const json = await response.json();
            setChats(json)
            console.log("HELLO WORLD", chats)
        }catch(err){
            setErr(err);
            console.log(err)
        }
    }

    const createChat = async(date)=> {
        setErr(null)
        try{
            const response = await fetch(url + `/${date}`, {
                method: 'POST',
                headers: {Authorization: `Bearer ${user.token}`, 'Content-Type': 'Application/json'},
                body: JSON.stringify({date})
            })

            const json = await response.json()
            console.log("hello world",json)
            setChats(json)
        }catch(err){console.log(err); setErr(err)}

    }

    return {loadChats, updateChat,createChat, chats, err};
}