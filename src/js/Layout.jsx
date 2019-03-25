import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./store/appContext.jsx";

import { Home } from "./views/Sal/Home.jsx";
import { Explore } from "./views/Sal/ExplorePage.jsx";
import { Login } from "./views/Sal/login.jsx";

import { Article } from "./views/Daph/article.jsx";

import { Cart } from "./views/Gabe/Cart.jsx";
import { Checkout } from "./views/Gabe/Checkout.jsx";
import { Create } from "./views/Gabe/Create.jsx";
import { Bundle } from "./views/Gabe/Bundle.jsx";

import { BundleList } from "./component/Gabe/BundleList.jsx";
import { Navbar } from "./component/Sal/navbar.jsx";
import { Card } from "./component/Sal/card.jsx";
import { Jumbotron } from "./component/Sal/jumbotron.jsx";

class Layout extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/create" component={Create} />
						<Route path="/cart" component={Cart} />
						<Route path="/checkout" component={Checkout} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
