import React from "react";
import "./header.css";

function Header() {
	return (
		<header className="header">
			{/*logo*/}
			<div className="harrow-logo">
				<img src="/main-harrow-logo.svg" alt="Logo" />
			</div>

			{/*pages*/}
			<div className="container navbar">
				<nav className="menu">
					<ul className="page-list">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/clinicaldata">Clinical Data</a>
						</li>
						<li>
							<a href="/iit">Investigator-initiated Trials</a>
						</li>
						<li>
							<a href="/medinfo">Medical Info Requests</a>
						</li>
						<li>
							<a href="/charitablegrant">Charitable Grant Requests</a>
						</li>
					</ul>
				</nav>
			</div>

			{/*search bar*/}
			<div class="search-bar">
				<form className="header-search-btn">
					<input type="search" placeholder="Search..."/>
					<button type="submit">Search</button>
				</form>
			</div>
		</header>
	);
}

export default Header;
