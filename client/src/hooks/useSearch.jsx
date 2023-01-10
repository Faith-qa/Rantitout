import React, {useState} from 'react'

import { useAuthContext } from './useAuthContext'

export const useSearch = () => {
    const [err, setErr] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [chat, setChat] = useState(null)
    const {user} = useAuthContext()

    



    const handlesearch = async(chatdate) =>{
        const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats/${user._id}/${new Date(chatdate).toISOString()}`;
        console.log(url)
        setErr(null)
        setChat(null)

        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {Authorization: `Bearer ${user.token}`}
            })

            //console.log(response.data)
            const json = await response.json()
           //console.log("hello", json)

           if (json === 'chat was not found' || !json.user) {
            setErr(json);
            throw new Error(JSON.stringify(json))
            //throw n ew Error("hello")
           }

           console.log(json)

           setChat(json)

        }catch(err){
            setErr(err);
            console.log(err)

        }

    }

    // const handleselect = async(chatdate) => {
    //     const messages = await handlesearch(chatdate)
    //     console.log("here are the conv", messages.messages)

    //     return messages.messages
    // }

    return {handlesearch, chat, err}
}

  