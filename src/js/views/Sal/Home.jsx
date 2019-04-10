import React from "react";
import Jumbotron from "../../component/Sal/Components/jumbotron.jsx";
export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="Jumbotron">
					<Jumbotron />
				</div>
				<div className="text-left mt-5" />
				<form>
					<div className="form-group">
						<label htmlFor="" />
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="What do you want to do?"
						/>
					</div>
				</form>
				<div />
			</div>
		);
	}
}
