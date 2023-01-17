import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MdDescription, MdLocalOffer, MdRoom, MdSearch, MdMoreVert, MdImage, MdVideoLibrary } from 'react-icons/md'
import { Link } from "react-router-dom";

import { TermContext } from "../Context";
import Searchbar from '../components/Sarchbar';
import '../styles/Results.css';
import defaultResults from "../defaultResults";

const Results = () => {
    const { searchTerm } = useContext(TermContext);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);

    //Runs on first load and everytime the global searchTerm changes
    useEffect(() => {
        //Google Custom Search API request with provided API key, custom search context key and search term
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${searchTerm}`).then(response => {
            //If there was no error set response to results variable
            setResults(response.data);
            setLoading(false);
        }).catch(err => {
                //Google Custom Search API has 100 requests per day limit. If there is an error (http 429) display deafult results
                setResults(defaultResults)
                setLoading(false)
                alert('There was too many requests today. Search engine will return default request')
            })
        }, [searchTerm])
    
    
    return ( 
        <div className="results">
            <div className="results-header">
                <div className="results-header-top">
                    <div className="results-header-image">
                        <Link to="/">
                            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=""></img>
                        </Link>
                    </div>
                    <Searchbar hideButtons />
                </div>
                <div className="results-header-content">
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
            {/* If leading is true, display loading message */}
            {loading && <p>Loading...</p>}
            {/* If leading is false and the search term is not empty display results div */}
            {(!loading && searchTerm) && (
                <div className="results-data">
                    <p className="results-data-stats">
                        {/* Google Custom Search API gives us information about how many results are there and how much were they found */}
                        About {results?.searchInformation?.formattedTotalResults} results ({results?.searchInformation?.formattedSearchTime} seconds) for {searchTerm}
                    </p>
                    {/* Map through results item and return div with link, title and description */}
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