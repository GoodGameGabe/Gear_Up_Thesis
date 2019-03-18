import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg  bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse open"
				id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#">
						Categories
					</a>
					<a className="nav-item nav-link" href="#">
						Fashion
					</a>
					<a className="nav-item nav-link" href="#">
						Portrait
					</a>
					<a className="nav-item nav-link" href="#">
						Landscape
					</a>
					<a className="nav-item nav-link" href="#">
						Sports
					</a>
					<a className="nav-item nav-link" href="#">
						Wedding
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
