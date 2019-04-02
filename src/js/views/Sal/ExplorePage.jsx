import React from "react";

export class ExplorePage extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Explore a Category</h1>
				<div className="cat1 flip reduce">
					<img
						id="explore-img"
						src="https://images.pexels.com/photos/935952/pexels-photo-935952.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<a href="https://www.w3schools.com/html/">
						<h2>Fashion/Events</h2>
					</a>
				</div>
				<div className="cat2 flip">
					<img
						id="explore-img"
						src="https://images.pexels.com/photos/163439/football-american-football-quarterback-runner-163439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<a href="https://www.w3schools.com/html/">
						<h2>Sports</h2>
					</a>
				</div>
				<div className="cat3 flip">
					<img
						id="explore-img2"
						src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<a href="https://www.w3schools.com/html/">
						<h2>Nature</h2>
					</a>
				</div>
			</div>
		);
	}
}
