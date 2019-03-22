import React from "react";

import { SetBundle } from "../../component/Gabe/SetBundle.jsx";
import { SetProvider } from "../../component/Gabe/SetProvider.jsx";
import { SetFinal } from "../../component/Gabe/SetFinal.jsx";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext.jsx";

export class Create extends React.Component {
	render() {
		return (
			<div className="container-fluid row">
				<nav>
					<ul>
						<li>
							<SetProvider />
						</li>
						<li>
							<SetBundle />
						</li>
						<li>
							<SetFinal />
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
