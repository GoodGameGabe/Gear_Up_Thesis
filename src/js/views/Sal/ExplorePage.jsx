import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import PropTypes from "prop-types";

export class ExplorePage extends React.Component {
	render() {
		return (
			<div className="text-center mt-5 stylz">
				<h1>Explore a Category</h1>
				<div className="cat1 flip reduce">
					<Link to={"/article/1"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/935952/pexels-photo-935952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/2"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/1875423/pexels-photo-1875423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/3"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/4"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/1722868/pexels-photo-1722868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/5"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/724494/pexels-photo-724494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/6"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/1797272/pexels-photo-1797272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>

					<h2>Fashion/Events</h2>
				</div>
				<div className="cat2 flip">
					<Link to={"/article/7"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/40564/ice-hockey-players-pass-forward-40564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/8"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/1289118/pexels-photo-1289118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/9"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/159594/soccer-football-player-sport-159594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/10"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/11"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/163439/football-american-football-quarterback-runner-163439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/12"}>
						<img
							id="explore-img"
							src="https://images.pexels.com/photos/159550/baseball-foul-ball-hit-baseball-bat-159550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>

					<h2>Sports</h2>
				</div>
				<div className="cat3 flip ">
					<Link to={"/article/13"}>
						<img
							id="explore-img2"
							src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/14"}>
						<img
							id="explore-img2"
							src="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/15"}>
						<img
							id="explore-img2"
							src="https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>
					<Link to={"/article/16"}>
						<img
							id="explore-img2"
							src="https://images.pexels.com/photos/374811/pexels-photo-374811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						/>
					</Link>

					<h2>Nature</h2>
				</div>
			</div>
		);
	}
}
