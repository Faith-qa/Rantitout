import React, {useState} from 'react'

import { useAuthContext } from './useAuthContext'

export const useSearch = () => {
    const [err, setErr] = useState("null")
    const [isLoading, setIsLoading] = useState(null)
    const [chat, setChat] = useState(null)
    const {user} = useAuthContext()

    



    const handlesearch = async(chatdate) =>{
        const url = `${process.env.REACT_APP_BASE_URL}/api/v1/chats/${user._id}/${new Date(chatdate).toISOString()}`;
        console.log(url)

        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {Authorization: `Bearer ${user.token}`}
            })

            setChat(response.data)



        }catch(err){
            setErr(true);

        }


    }

    return {handlesearch, err}
}

  