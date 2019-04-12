import React from "react";
import { BundleList } from "../../component/Gabe/BundleList.jsx";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import PropTypes from "prop-types";

export class Purchased extends React.Component {
	render() {
		return (
			<div className="container-fluid bg-dark text-white d-flex row">
				<div className="col-12 text-center p-5">
					<h2>Congragulations on your two purchases</h2>
				</div>
				<div className="col-12 pb-5 pt-2 d-flex flex-wrap justify-content-center">
					<Link to={"/"}>
						<button className="bt btn-primary">Return Home</button>
					</Link>
				</div>
			</div>
		);
	}
}
