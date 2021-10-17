import React from "react";
import {Link} from "react-router-dom";

import "./Header.css"

const Header = () => {
    
    return (
        <div className="Header">
            <div className="headerLogo">
                Header
            </div>
            <div className="headerNav">
                <Link to={"/board"}>Board</Link>
                <Link to={"/introduction"}>Introduction</Link>
                <Link to={"/member"}>Member</Link>
                <Link to={"/project"}>Project</Link>
            </div>
        </div>
    );
}

export default Header;