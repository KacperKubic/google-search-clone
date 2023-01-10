import React from "react";
import { Link } from "react-router-dom";
import { GrApps } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import Searchbar from "../components/Sarchbar";
import "../styles/Homepage.css";

const Homepage = () => {
    return ( 
        <div className="homepage">
            <div className="homepage-header">
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Images</Link>
                <GrApps className="icon"/>
                <FaUserCircle className="icon"/>
            </div>
            <div className="homepage-body">
                <img src="https://www.google.be/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                <Searchbar />
            </div>
        </div>
     );
}
 
export default Homepage;