import React from "react";
import { BundleList } from "../../component/Gabe/BundleList.jsx";

export class Checkout extends React.Component {
	render() {
		return (
			<div className="container-fluid row">
				<div>
					<BundleList />
				</div>
				<div>
					<p>payment method</p>
					<p>Address</p>
					<button className="btn btn-primary">purchase</button>
				</div>
			</div>
		);
	}
}
