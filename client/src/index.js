import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import {ChatContextProvider} from './Context/ChatContext'
import { ThemeProvider } from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
              <AuthContextProvider>
                <ChatContextProvider>
                        <ThemeProvider>
                        <App />
                        </ThemeProvider>
                </ChatContextProvider>
          </AuthContextProvider>

        </React.StrictMode>
  

          
  
  
);
