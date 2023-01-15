import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MdDescription, MdLocalOffer, MdRoom, MdSearch, MdMoreVert, MdImage, MdVideoLibrary } from 'react-icons/md'
import { Link } from "react-router-dom";

import { TermContext } from "../Context";
import { API_KEY, CONTEXT_KEY } from '../keys'
import Searchbar from '../components/Sarchbar';
import '../styles/Results.css';
import defaultResults from "../defaultResults";

const Results = () => {
    const { searchTerm } = useContext(TermContext);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        /*axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`).then((response) => {
            console.log(response);
            setResults(response.data);
            setLoading(false);
        })*/
        setResults(defaultResults)
    }, [searchTerm])
    
    
    return ( 
        <div className="results">
            <div className="results-header">
                <Link to="/">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""></img>
                </Link>
                <div className="results-header-content">
                    <Searchbar hideButtons />
                    <div className="results-header-options">
                        <div className="results-header-option">
                            <MdSearch />
                            <p>All</p>
                        </div>
                        <div className="results-header-option">
                            <MdImage />
                            <p>Images</p>
                        </div>
                        <div className="results-header-option">
                            <MdVideoLibrary />
                            <p>Video</p>
                        </div>
                        <div className="results-header-option">
                            <MdRoom />
                            <p>Maps</p>
                        </div>
                        <div className="results-header-option">
                            <MdDescription />
                            <p>News</p>
                        </div>
                        <div className="results-header-option">
                            <MdLocalOffer />
                            <p>Shopping</p>
                        </div>
                        <div className="results-header-option">
                            <MdMoreVert />
                            <p>More</p>
                        </div>
                        <div className="results-header-option tools">
                            <p>Tools</p>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <p>Loading...</p>}
            {(!loading || searchTerm) && (
                <div className="results-data">
                    <p className="results-data-stats">
                        About {results?.searchInformation?.formattedTotalResults} results ({results?.searchInformation?.formattedSearchTime} seconds) for {searchTerm}
                    </p>
                    {results?.items.map((item) => {
                        return(
                            <div className="results-item" key={item.link}>
                                <a className="results-item-display-link" href={item.link}>
                                    {item.displayLink}
                                </a>
                                <a className="results-item-title" href={item.link}>
                                    <h3>{item.title}</h3>
                                </a>
                                <p className="results-item-desc">{item.snippet}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
     );
}
 
export default Results;