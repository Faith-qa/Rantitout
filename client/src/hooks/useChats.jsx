import React, {useState} from "react";

import { useAuthContext } from "./useAuthContext";

export const useChats = () => {
    const [chats, setChats] = useState(null);
    const [err, setErr] = useState(null);

    const {user} = useAuthContext();


    const loadChats = async() => {
        setErr(null)
        const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats/${user._id}`;
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
                }

                
            }

            // if (!json.date) {
            //     setErr(true)
            //     throw new Error(JSON.stringify(json))
            // }

            setChats(json)



        }catch(err){
            setErr(true);
            console.log(err)

        }



    }

    return {loadChats, chats, err}
}