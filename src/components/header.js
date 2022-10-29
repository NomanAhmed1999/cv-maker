import React from 'react';
import "../styles/global-style.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="header-fixed">

                <div className="header-limiter">

                    <h1><Link to="/">CV<span>maker</span></Link></h1>

                    <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about" className="selected">About</Link>
                    <Link to="/templates">Templates</Link>
                    <Link to="/contact">Contact</Link>

                    </nav>

                </div>

            </div>
        </div>
    )
}


export default Header;