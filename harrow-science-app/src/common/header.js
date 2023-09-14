import React from "react";
import "./header.css";

function Header() {
    return (
        <header className="header">
            {/*logo*/}
            <div className="logo">
                <img src="/logo512.png" alt="Logo" />
            </div>

            {/*pages*/}
            <nav className="menu">
                <ul className="page-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/clinicaldata">Clinical Data</a></li>
                    <li><a href="/iit">Investigator-initiated Trials</a></li>
                    <li><a href="/medinfo">Medical Info Requests</a></li>
                    <li><a href="/charitablegrant">Charitable Grant Requests</a></li>
                </ul>
            </nav>

            {/*search bar*/}
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
    </header>
    );
}

export default Header;