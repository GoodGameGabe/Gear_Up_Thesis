import React from "react";

export class SetProvider extends React.Component {
	render() {
		return (
			<div className="container-fluid row">
				<h1>Start by selecting a provider:</h1>
				<div>
					<nav>
						<ul>
							<li>
								<img
									src="https://merivisfoundation.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG.png"
									alt="Amazon"
								/>
							</li>
							<li>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/B%26H_Foto_%26_Electronics_Logo.svg/1200px-B%26H_Foto_%26_Electronics_Logo.svg.png"
									alt="B&H Photo"
								/>
							</li>
						</ul>
					</nav>
				</div>
				<div>
					<button className="btn btn-primary text-white">
						Continue
					</button>
				</div>
			</div>
		);
	}
}
