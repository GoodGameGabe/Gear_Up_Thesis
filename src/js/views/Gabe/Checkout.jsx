import React from "react";
import { BundleList } from "../../component/Gabe/BundleList.jsx";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import PropTypes from "prop-types";

export class Checkout extends React.Component {
	render() {
		return (
			<div className="container-fluid row text-white d-flex">
				<div className="justify-content-center col-4">
					<div className="card bg-dark p-3">
						<form action="#" className="row">
							<div className="col-6">
								<label>Credit Card Number </label>
								<input type="text" name="number" />
							</div>

							<div className="col-6">
								<label>Expiration Date </label>
								<input type="text" name="date" />
							</div>

							<div className="col-6">
								<label>Name</label>
								<input type="text" name="name" />
							</div>

							<div className="col-6">
								<label>CVV </label>
								<input type="text" name="cvv" />
							</div>

							<button type="button" className="btn btn-info">
								Cancel
							</button>
							<Link to={"/purchased"}>
								<button className="btn btn-primary">
									Purchase
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
