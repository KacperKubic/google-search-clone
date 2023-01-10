import React from "react";
import { GrSearch, GrMicrophone } from 'react-icons/gr'
import '../styles/Searchbar.css'

const Searchbar = () => {
    return ( 
        <div className="searchar">
            <div className="searchbar-input">
                <GrSearch className="input-icon"/>
                <input type="text"/>
                <GrMicrophone className="input-icon"/>
            </div>
        </div>
     );
}
 
export default Searchbar;