import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import PropTypes from "prop-types";

class BundleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// initialize your state
		};
	}
}

BundleList.propTypes = {
	index: PropTypes.number,
	name: PropTypes.name,
	category: PropTypes.string,
	brand: PropTypes.string,
	price: PropTypes.array,
	history: PropTypes.object,
	picture: PropTypes.string,
	onDelete: PropTypes.func
};

BundleList.defaultProps = {
	name: "Enter Product Name",
	category: "Enter Category",
	brand: "Enter Brand Name",
	vendor: "Amazon",
	price: "0.00",
	pic: "https://svgshare.com/i/65U.svg",
	onDelete: null
};
export default withRouter(BundleList);
