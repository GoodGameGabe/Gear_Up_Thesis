import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./store/appContext.jsx"; 
/* 

import { Home } from "./Sal/views/home.jsx";
import { Explore } from "./Sal/views/explore.jsx";
import { Login } from "./Sal/views/login.jsx";

import { Article } from "./Daph/views/article.jsx";


import { Cart } from "./Gabe/views/cart.jsx";
import { Checkout } from "./Gabe/views/checkout.jsx";
import { Create } from "./Gabe/views/create.jsx";
import { Bundle } from "./Gabe/views/bundle.jsx";

import { Cover } from "./views/cover.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./Daph/component/navbar.jsx";
import { Card } from "./Daph/component/Card.jsx";
import { Jumbotron } from "./Daph/component/Jumbotron.jsx";

*/

class Layout extends React.Component {
	
	render() {
		return (
			{/*
			<div>
				<BrowserRouter>
					<div>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/explore" component={Explore} />
							<Route path="/create" component={Create} />
							<Route path="/cart" component={Cart} />
							<Route path="/login" component={Login} />
							<Route path="/article/:theid" component={Article} />
							<Route path="/checkout" component={Checkout} />
							<Route path="/cover" component={Cover} />
							<Route render={() => <h1>Not found!</h1>} /> 
						</Switch>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
			*/}
		);
	}
}

export default Store(Layout);