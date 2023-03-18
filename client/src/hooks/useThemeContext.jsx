//a custom hook that can be used to access the theme
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const useTheme = () => {
    const theme = useContext(ThemeContext)
    return theme;
};

export default useTheme;