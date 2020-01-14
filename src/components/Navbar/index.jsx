import React from "react";

import './navbar.css';


const Navbar = () => {

    return (

        <nav className="navbar" >
            <div className="container">
                <div className="columns">
                    <div className="column-is-half">
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
                    </div>
                </div>
            </div>
        </nav>

    );

}

export default Navbar;