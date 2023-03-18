//context to hold the theme and provide to children
import {createContext, useState} from "react"

const ThemeContext = createContext({
    dark: false,
    toggle: () => {}
});

const ThemeProvider = ({children})=>{
    const [dark, setDark] = useState(false);

    const toggle = () => {
        setDark(!dark)
    }

    return (
        <ThemeContext.Provider value={{dark, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
    
};

export {ThemeProvider, ThemeContext}