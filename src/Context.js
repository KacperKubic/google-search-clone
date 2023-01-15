import { createContext, useState } from "react";

export const TermContext = createContext();

const Context = ({children}) => {
    const [searchTerm, setSearchTerm] = useState(null);
    return(
        <TermContext.Provider value={{searchTerm, setSearchTerm}}>
            {children}
        </TermContext.Provider>
    )
}

export default Context;