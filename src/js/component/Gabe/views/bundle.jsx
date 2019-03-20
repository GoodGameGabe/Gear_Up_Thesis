import React from "react";
import { Jumbotron } from "./Daph/component/Jumbotron.jsx";


export class Bundle extends React.Component {
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
				
				</div>
			</div>

		);
	}
}