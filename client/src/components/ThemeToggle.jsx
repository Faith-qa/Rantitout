import React from 'react'
import useTheme from "../hooks/useThemeContext";

export default function ThemeToggle(){
    const theme = useTheme()

    return (
        <div>
        <button onClick={theme.toggle}>
            {theme.dark ? "light" : "Dark"} Mode
        </button>
        </div>
    )
}

