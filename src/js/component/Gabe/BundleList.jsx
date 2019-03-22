import React from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext.jsx";

export class BundleList extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<div>
						<img src={this.props.image} />
						<h4>{this.props.name}</h4>
						<p>{this.props.price}</p>
					</div>
				</li>
			</ul>
		);
	}
}

BundleList.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number
};

BundleList.defaultProps = {
	name: "Product",
	image:
		"https://static.bhphoto.com/images/images500x500/nikon_d7500_dslr_camera_with_1492611670000_1333200.jpg",
	price: 1.0
};
