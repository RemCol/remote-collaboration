import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {

    return (
        <nav className="header">
            <Link to="/" className="header__link">
                <p className="header__logo">RemCol</p>
            </Link>
        
            <div className="header__nav">
                <Link to="/login" className="header__link"> {/* Redirects if logged in */}
                    <div className="header__option">
                        <span className="header__optionLine">{'Sign In'}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header
