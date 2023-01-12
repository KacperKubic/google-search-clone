import { createContext, useState } from "react";

export const TermContext = createContext();

const Context = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <TermContext.Provider value={{searchTerm, setSearchTerm}}>
            {children}
        </TermContext.Provider>
    )
}

export default Context;