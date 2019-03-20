import React from "react";
import { BundleList } from "./Gabe/component/BundleList.jsx";

import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

import { Context } from "../store/appContext.jsx";

export class Create extends React.Component {
	render() {
		return (	
			<div className="container-fluid row">
				
				{/* Left Side */}
				<div className="col-6">
					
					{/* Title */}
					<div>
						<h1> Create </h1>
					</div>
					
					{/* Search */}
					<div>
						<input type="text" className="" 
						placeholder="What are you looking for?" />
					</div>

					{/* Button */}
					<div>
						<button type="submit" className="bg-primary text-white"> 
						Continue 
						</button>
					</div>
				</div>
				
				{/* Right Side */}
				<div className="col-6">
					{/* Header */}
					<div>
					
					</div>
					{/* Product List */}
					<div>
					
					</div>
					{/* Price */}
					<div>
						<h4>Total: $price</h4>
					</div>
				</div>
			</div>

		);
	}
}