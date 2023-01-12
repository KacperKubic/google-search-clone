import React, { useContext } from "react";
import { TermContext } from "../Context";
import Searchbar from '../components/Sarchbar'

const Results = () => {
    const {searchTerm} = useContext(TermContext);

    return ( 
        <div className="results">
            <Searchbar hideButtons/>
            <h1>{searchTerm}</h1>
        </div>
     );
}
 
export default Results;