import React from "react";
import ButtonContext from "./ButtonContext";


export const ButtonContextProvider = ({children})=>{
    const [user, setUser] = React.useState(null);
    return(
        <ButtonContext.Provider value={{user, setUser}}>
            {children}
        </ButtonContext.Provider>
    )
}