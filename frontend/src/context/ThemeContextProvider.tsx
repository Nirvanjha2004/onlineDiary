import { useContext, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

 export const ThemeContextProvider = ({children}: {children: React.ReactNode}) =>{
    const [themeCon, setThemeCon] = useState("red");
    useEffect(() => {
        console.log("ThemeCon updated:", themeCon);
      }, [themeCon]);
    return (
        <ThemeContext.Provider value={{themeCon, setThemeCon}}>
            {children}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);