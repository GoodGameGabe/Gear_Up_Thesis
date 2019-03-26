import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./store/appContext.jsx";

import { Home } from "./views/Sal/Home.jsx";
import { ExplorePage } from "./views/Sal/ExplorePage.jsx";
import { Login } from "./views/Sal/login.jsx";

import { Article } from "./views/Daph/article.jsx";

import { Cart } from "./views/Gabe/Cart.jsx";
import { Checkout } from "./views/Gabe/Checkout.jsx";
import { Create } from "./views/Gabe/Create.jsx";
import { Bundle } from "./views/Gabe/Bundle.jsx";

import { BundleList } from "./component/Gabe/BundleList.jsx";
import { NavBar } from "./component/Sal/Components/navbar.jsx";
import { Card } from "./component/Sal/Components/card.jsx";
import { Jumbotron } from "./component/Sal/Components/jumbotron.jsx";
class Layout extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/create" component={Create} />
						<Route path="/cart" component={Cart} />
						<Route path="/checkout" component={Checkout} />
						<Route path="/explorepage" component={ExplorePage} />
						<Route path="/login" component={Login} />
						<Route path="/article" component={Article} />
						<Route path="/bundle" component={Bundle} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
