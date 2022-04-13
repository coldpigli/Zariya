import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("day-theme");
    return <ThemeContext.Provider value={{theme, setTheme}}>
                {children}
           </ThemeContext.Provider>
}

export {useTheme, ThemeProvider};