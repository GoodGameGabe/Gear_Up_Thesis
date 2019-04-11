import React from 'react';
import {withRouter} from 'react-router-dom';

import PropTypes from 'prop-types';

class ItemCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
			// initialize your state
		};
	}
	
	render(){
		return (
			<li className="list-group-item">
				<div className="row w-100">
					{/* Image */}
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img src={this.props.picture} className="rounded-circle mx-auto d-block img-fluid w-50" />
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						{/* Name */}
						<label className="picture lead">{this.props.name} </label>
						<br /> 
						{/* Price */}
						<span className="text-muted small">{this.props.price}</span>

					</div>
				</div>
			</li>
		);
	}
}

ItemCard.propTypes = {
		index: PropTypes.number,
		name: PropTypes.name,
		category: PropTypes.string,
		brand: PropTypes.string,
		price: PropTypes.array,
		history: PropTypes.object,
		picture: PropTypes.string,
		onDelete: PropTypes.func
};

ItemCard.defaultProps = {
	name: "Enter Product Name",
	category: "Enter Category",
	brand: "Enter Brand Name",
	vendor: "Amazon",
	price:"0.00",
	pic: "https://svgshare.com/i/65U.svg",
	onDelete: null
	
};
export default withRouter(ItemCard);