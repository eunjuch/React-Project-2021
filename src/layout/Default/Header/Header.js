import React from "react";
import {Link} from "react-router-dom";

import "./Header.css"

const Header = () => {
    
    return (
        <div className="Header">
            <Link to={"/"}>
                <div className="headerLogo">
                    Header
                </div>
            </Link>
            <div className="headerNav">
                <Link to={"/board"}>
                    <div className="headerNavItem">
                        Board
                    </div>
                </Link>
                <Link to={"/introduction"}>
                    <div className="headerNavItem">
                        Introduction
                    </div>
                </Link>
                <Link to={"/member"}>
                    <div className="headerNavItem">
                        Member
                    </div>
                </Link>
                <Link to={"/project"}>
                    <div className="headerNavItem">
                        Project
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;