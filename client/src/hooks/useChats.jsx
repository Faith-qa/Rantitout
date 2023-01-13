import React, {useState} from "react";

import { useAuthContext } from "./useAuthContext";

export const useChats = () => {
    const [chats, setChats] = useState([]);
    const [err, setErr] = useState(null);

    const {user} = useAuthContext();


    const loadChats = async() => {
        setErr(null)
       // var chaats = []
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
                  //  chaats.push(j)
                }


                
            }
            //console.log(json.date)

            // if (!json.date) {
            //     setErr(json)
            //     throw new Error(JSON.stringify(json))
            // }
            console.log("hello", JSON.parse(JSON.stringify(json)))
            setChats(json)



        }catch(err){
            setErr(err);
            console.log(err)

        }



    }

    return {loadChats, chats, err}
}