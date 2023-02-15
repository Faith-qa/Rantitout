import React, {useState} from "react";

import { useAuthContext } from "./useAuthContext";
import { useChatContext } from "./useChatContext";

export const useChats = () => {
    const [chats, setChats] = useState([]);
    const [err, setErr] = useState(null);

    const {user} = useAuthContext();
    //const {dispatch} = useChatContext()
    const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats/${user._id}`;


    const loadChats = async()=>{
        setErr(null)
       // var chaats = []
        //const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats/${user._id}`;

        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {Authorization: `Bearer ${user.token}`}
            })

            const json = await response.json()

            for (var i = 0; i < json.length; i++) {
                for(var j = 0; j < i.length; j++) {
                    if (!j.date){
                        setErr(json)
                        throw new Error(JSON.stringify(json))
                    }
                  //  chaats.push(j)
                }


                
            }
            //console.log(json.date)

            // if (!json.date) {
            //     setErr(json)
            //     throw new Error(JSON.stringify(json))
            // }
           // console.log("hello", JSON.parse(JSON.stringify(json)))
            setChats(...json)
            //dispatch({type: 'LOADMESSAGES', payload: json})




        }catch(err){
            setErr(err);
            console.log(err)

        }





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
            console.log(json)
            setChats(json)
        }catch(err){
            setErr(err);
            console.log(err)
        }
    }

    return {loadChats, updateChat, chats, err};
}