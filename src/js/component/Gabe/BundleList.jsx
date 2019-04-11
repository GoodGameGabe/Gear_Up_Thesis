import React from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext.jsx";
import ItemCard from "./BundleList.jsx";

export class BundleList extends React.Component {
	render() {
		return (
			<div>
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
										price={content.price}
										brand={content.brand}
										vendor={content.vendor}
										category={content.category}
										index={index}
									/>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</div>
		);
	}
}

BundleList.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.string
};

BundleList.defaultProps = {
	name: "Product",
	image:
		"https://static.bhphoto.com/images/images500x500/nikon_d7500_dslr_camera_with_1492611670000_1333200.jpg",
	price: 1.0
};
