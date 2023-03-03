import {
    createContext,
    useReducer,
}  from 'react';

export const ChatContext = createContext()


export const ChatContextProvider = ({children}) => {
    const INITIAL_STATE = {
        chat_date: "",
        _messages: {},
    };

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_DATE":
                return {
                    _messages: action.payload.messages,
                    chat_date: action.payload.date
                };
            case "UPDATE_MESSAGES":
                return {
                    _messages: action.payload.messages,
                    chat_date: action.payload.date

                }
            default:
                return state;
        }

    };
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)

    return (
        <ChatContext.Provider value={{...state, dispatch}} >
            {children}
        </ChatContext.Provider>
    )
}