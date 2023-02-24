import { createContext, useState } from "react";

export const Context = createContext({})

export const Provider = ({children}) =>{

    const [listContext, setListContext] = useState([])
    return(
        <Context.Provider value={{listContext, setListContext}}>
            {children}
        </Context.Provider>
    )
}