import React from "react";
import {Link} from "react-router-dom";

import "./Header.css"

const Header = () => {
    
    return (
        <div className="Header">
            <Link to={"/"}>
                <div className="headerLogo">
                    CECOM
                </div>
            </Link>
            <div className="headerNav">
                <Link to={"/board"}>
                    <div className="headerNavItem">
                        <div className="headerNavItemTitle">
                            <p>Board</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/introduction"}>
                    <div className="headerNavItem">
                        <div className="headerNavItemTitle">
                            <p>Introduction</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/member"}>
                    <div className="headerNavItem">
                        <div className="headerNavItemTitle">
                            <p>Member</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/project"}>
                    <div className="headerNavItem">
                        <div className="headerNavItemTitle">
                            <p>Project</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;