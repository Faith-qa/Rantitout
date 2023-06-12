import { createContext, useReducer, useEffect, ReactNode } from 'react'

export interface AuthState{
    user: any;
}
export interface AuthContextValue extends AuthState {
  dispatch?: React.Dispatch<any>;
}
export interface AuthContextProviderProps {
    children: ReactNode;
  }
  
export const AuthContext = createContext<AuthState | null>(null);

export const authReducer = (state: any, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  useEffect(() => {
    const userString = localStorage.getItem('user');
    const user = userString !== null ? JSON.parse(userString) : null;

    if (user) {
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])

  console.log('AuthContext state:', state)
  const contextValue: AuthContextValue = { user: state.user, dispatch };

  
  return (
    <AuthContext.Provider value={contextValue}>
      { children }
    </AuthContext.Provider>
  )

}