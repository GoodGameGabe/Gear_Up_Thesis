import React from "react";
import { Jumbotron } from "../components/jumbotron.jsx";


export class BundlePreview extends React.Component {
	render() {
		return (	
			<div className="container-fluid row">
				
				{/* Header */}
				<Jumbotron />
				
				{/* Tag Line */}
				<div>
					<h4><i>Your mum gay</i></h4>
				</div>
				
				{/* Article */}
				<div className="col-6">
					<p></p>
					<br />
					<p></p>
					<br />
					<p></p>
					<br />
					<p></p>
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