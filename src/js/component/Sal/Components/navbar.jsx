import React from "react";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg  bg-dark">
			<a className="navbar-brand" href="/">
				Gear Up
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
					<a className="nav-item nav-link active" href="/">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="/categories">
						Categories
					</a>
					<a className="nav-item nav-link" href="/explorepage">
						Explore
					</a>
					<a className="nav-item nav-link" href="/create">
						Create
					</a>
					<a className="nav-item nav-link" href="/login">
						Login
					</a>
				</div>
			</div>
		</nav>
	);
};
