import { useContext } from 'react'

import { ChatContext } from '../Context/ChatContext'

export const useChatContext =() => {
    const context = useContext(ChatContext)

    if (!context) {
        throw Error('useChatContect must be used inside ChatContextProvider')
 
    }

    return context
}