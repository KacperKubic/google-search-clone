import React, { useState, useContext } from "react";
import { MdSearch, MdMic, MdClear } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { TermContext } from "../Context";
import '../styles/Searchbar.css'

const Searchbar = ({hideButtons = false}) => {
    const [inputValue, setInputValue] = useState("");
    const {setSearchTerm} = useContext(TermContext);
    const navigate = useNavigate();

    //Go to results page
    const googleSearch = (e) => {
        e.preventDefault();
        //If empty form was submited do nothing
        if(inputValue === ""){
            return;
        }else{
            //Set global search term state to inputValue, then push the user to /results
            setSearchTerm(inputValue);
            navigate("/results");
        }
    }
    return ( 
        <div className="searchbar">
            <form onSubmit={googleSearch}>
                <div className="searchbar-input">
                    <MdSearch className="input-icon"/>
                    <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text"/>
                    {/* Display clear button only if the input is not empty */}
                    {inputValue !== "" && <MdClear className="remove-icon" onClick={() => setInputValue("")}/>}
                    <MdMic className="input-icon"/>
                </div>
                {/* If hide buttons is true, then do not display "Google search" and "I'm feeling lucky" buttons. Adding this makes the component reusable in results page */}
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