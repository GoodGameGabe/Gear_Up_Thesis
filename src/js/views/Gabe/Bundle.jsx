import React from "react";
import { Jumbotron } from "../../component/Sal/Components/jumbotron.jsx";
import { BundleList } from "../../component/Gabe/BundleList.jsx";

export class Bundle extends React.Component {
	render() {
		return (
			<div className="container-fluid row">
				{/* Header */}
				<Jumbotron />

				{/* Tag Line */}
				<div>
					<h4>
						<i>Your mum gay</i>
					</h4>
				</div>

				{/* Article */}
				<div className="col-6">
					<p />
					<br />
					<p />
					<br />
					<p />
					<br />
					<p />
					<br />
				</div>

				{/* Bundle List */}
				<div className="col-6">
					<BundleList />
				</div>
			</div>
		);
	}
}
