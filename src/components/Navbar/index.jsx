import React from "react";

import './navbar.css';


const Navbar = () => {

    return (
        
        <nav className="navbar" >

            <ul className="navbar">
                <li className="navbar-item">
                    <a href="/search">
                        Search
                        </a>
                </li>
                <li className="navbar-item">
                    <a href="/saved">
                        Saved
                        </a>
                </li>
            </ul>

        </nav>
       
    );
    
}

export default Navbar;