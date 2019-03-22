import React from "react";
import { Bundle } from "../../views/Gabe/Bundle.jsx";

export class SetFinal extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			photo: "",
			tagline: "",
			desc: ""
		};
	}

	titleInput = e => {
		this.setState({ title: e.target.value });
	};

	taglineInput = e => {
		this.setState({ tagline: e.target.value });
	};

	photoInput = e => {
		this.setState({ photo: e.target.value });
	};

	descInput = e => {
		this.setState({ desc: e.target.value });
	};

	render() {
		return (
			<div className="container-fluid row">
				{/* Left Side */}
				<div>
					{/* Title Input */}
					<label>Title</label>
					<input placeholder="Add Title" onChange={this.titleInput} />

					{/* Cover Photo Input */}
					<label>Cover Photo</label>
					<input
						placeholder="Add Cover Photo"
						onChange={this.photoInput}
					/>

					{/* Tagline Input */}
					<label>Tagline</label>
					<input
						placeholder="Add Tagline"
						onChange={this.taglineInput}
					/>

					{/* Description Input */}
					<label>Description</label>
					<input
						placeholder="Add Description"
						onChange={this.descInput}
					/>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>

				{/* Right Side */}

				<div>
					<Bundle
						title={this.state.title}
						tagline={this.state.tagline}
						photo={this.state.photo}
						desc={this.state.desc}
					/>
				</div>
			</div>
		);
	}
}
