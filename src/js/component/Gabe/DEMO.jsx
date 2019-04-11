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
				<Context.Consumer>
					{({ store, actions }) => {
						window.onload = actions.getContacts;
						console.log(store.itemList.value);
						return store.itemList.map((content, index) => {
							return (
				
								<div
									className="col-12 border pt-2 pb-2 pl-3 pr-3 w-10 mw-100"
									key={index}>
									
									<ItemCard 
										name={content.name}
										price= {content.price}
										brand= {content.brand}
										vendor= {content.vendor}
										category= {content.category}
										index={index}
									/>
									
								
								</div>);
							}
						);
					}
				}
				
				</Context.Consumer>
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