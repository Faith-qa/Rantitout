import {useState} from 'react';
import {useAuthContext} from './useAuthContext'


export const useLogin = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async(email, password)=>{
        setIsLoading(true)
        setError(null)

        const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users/login`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        console.log(response)

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){

            if (!json.token){
                setIsLoading(false)
                setError(JSON.stringify(json))
                throw new Error(JSON.stringify(json))
            }
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context 

            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)

        }
    }

    return {login, isLoading, error}
    

}