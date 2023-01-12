import React, { useState, useContext } from "react";
import { GrSearch, GrMicrophone } from 'react-icons/gr'
import { useNavigate } from "react-router-dom";
import { TermContext } from "../Context";
import '../styles/Searchbar.css'

const Searchbar = ({hideButtons = false}) => {
    const [inputValue, setInputValue] = useState("");
    const {setSearchTerm} = useContext(TermContext);
    const navigate = useNavigate();

    const googleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(inputValue);
        navigate("/results");
    }

    return ( 
        <div className="searchar">
            <form onSubmit={googleSearch}>
                <div className="searchbar-input">
                    <GrSearch className="input-icon"/>
                    <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text"/>
                    <GrMicrophone className="input-icon"/>
                </div>
                {!hideButtons ? (
                    <div className="searchbar-buttons">
                        <button type="submit" onClick={googleSearch}>Google Search</button>
                        <button>I'm Feeling Lucky</button>
                    </div>
                ) : (
                    <div className="searchbar-buttons">
                        <button type="submit" onClick={googleSearch} className="hidden"> Google Search</button>
                        <button className="hidden">I'm Feeling Lucky</button>
                    </div>
                )}
            </form>
        </div>
     );
}
 
export default Searchbar;