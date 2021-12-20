import React from "react";
import {Link} from "react-router-dom";

import "./Header.css"

const Header = () => {
    
    return (
        <div className="Header">
            <Link to={"/"}>
                <div className="headerTitle">
                    <div className="headerTitleText">
                        <p>CECOM</p>
                    </div>
                </div>
            </Link>
            <div className="headerNav">
                <Link to={"/board"}>
                    <div className="headerNavItem">
                        <div className="headerNavItemTitle">
                            <p>게시판</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/introduction"}>
                    <div className="headerNavItem">
                        <div className="headerNavItemTitle">
                            <p>소개</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/member"}>
                    <div className="headerNavItem">
                        <div className="headerNavItemTitle">
                            <p>멤버</p>
                        </div>
                    </div>
                </Link>
                <Link to={"/project"}>
                    <div className="headerNavItem">
                        <div className="headerNavItemTitle">
                            <p>프로젝트</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;