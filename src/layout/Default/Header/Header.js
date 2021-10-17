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
                        <p>Board</p>
                        <div className="headerNavItemDeco"/>
                    </div>
                </Link>
                <Link to={"/introduction"}>
                    <div className="headerNavItem">
                        <p>Introduction</p>
                        <div className="headerNavItemDeco"/>
                    </div>
                </Link>
                <Link to={"/member"}>
                    <div className="headerNavItem">
                        <p>Member</p>
                        <div className="headerNavItemDeco"/>
                    </div>
                </Link>
                <Link to={"/project"}>
                    <div className="headerNavItem">
                        <p>Project</p>
                        <div className="headerNavItemDeco"/>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;