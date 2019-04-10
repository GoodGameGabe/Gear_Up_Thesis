import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Gear Up</h1>
			<div className="form-group">
				<label htmlFor="" />
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="What do you want to do?"
				/>
				<hr className="mt-4" />
				<p />
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to Action!
				</a>
			</div>
		</div>
	);
};

export default Jumbotron;
