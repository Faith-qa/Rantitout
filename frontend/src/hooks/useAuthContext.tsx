import { useContext } from 'react'

import { AuthContext } from '../Context/AuthContext'

export const useAuthContext =() => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContect must be used inside AuthContextProvider')
 
    }

    return context
}
