//import {useAuthContext} from './useAuthContext'
import { useAuthContext,  } from './useAuthContext';
import { AuthState } from '../Context/AuthContext';
import { useState } from 'react';

export interface AuthContextValue extends AuthState {
    dispatch?: React.Dispatch<any>;
  }
export const useLogin = () => {
    const [error, setError] = useState("");


    const { dispatch } = useAuthContext() as  AuthContextValue;

    const url = `${process.env.REACT_APP_API_URL}/api/v1/users/login `;

    const login = async(email: any, password: any)=>{
        setError("")

        const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users/login`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        //console.log(response)

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if(response.ok){

            if (!json.token){
                setError(JSON.stringify(json))
                throw new Error(JSON.stringify(json))
            }
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            //update state

            //update the auth context 

            if (dispatch) {
                dispatch({ type: 'LOGIN', payload: json });
              }

        }
    }

    return {login, error}
}

