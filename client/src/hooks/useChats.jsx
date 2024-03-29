import  {useState, } from "react";

import { useAuthContext } from "./useAuthContext";
import { useChatContext } from "./useChatContext";

export const useChats = () => {
    const [chats, setChats] = useState([]);
    const {dispatch, _messages} = useChatContext()
    const [message, setMessage] = useState([])

    const [err, setErr] = useState(null);

    const {user} = useAuthContext();
    //const {dispatch} = useChatContext()
    const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats/${user._id}`;

   
    const loadChats = async()=>{
       const res = await fetch(url, {
        method: 'GET',
        headers: {Authorization: `Bearer ${user.token}`, 'Content-Type': 'Application/json'},
       })
       const res_json = await res.json()
       //console.log(res_json)
       setChats([...res_json].sort((a,b)=>new Date(b.date) - new Date(a.date)))





    }

    const loadMessages = async(cDate)=>{
        console.log(url +`/${cDate}`)

        const res = await fetch(url +`/${cDate}`, {
            method: 'GET',
            headers: {Authorization: `Bearer ${user.token}`, 'content-Type': 'Application/json'}
        })

        const res_json = await res.json()
        //console.log(res_json)
        await dispatch({Type: "UPDATE_MESSAGES", payload: res_json})
        setMessage(_messages)


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

    return {loadChats, updateChat,createChat, loadMessages, message, chats, err};
}