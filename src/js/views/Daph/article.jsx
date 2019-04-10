import React from "react";

export class Article extends React.Component {
	render() {
		return (
			<div ClassName="container">
				<div className="jumbotron">
					<h1 className="display-4">Hello, world!</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
						incidunt odit vero aliquid similique quaerat nam nobis
						illo aspernatur vitae fugiat numquam repellat.
					</p>
					<hr className="mt-4" />
					<p />
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to Action!
					</a>
				</div>
				<div className="d-flex flex-row lineup">
					<div className="card size resized">
						<img
							className="card-img-top"
							src="https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Knowing the game</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title
							</p>
							<a href="#" className="btn btn-primary">
								Find out more!
							</a>
						</div>
					</div>
					<div className="card size resized">
						<img
							className="card-img-top"
							src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Clean stable image</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title .
							</p>
							<a href="#" className="btn btn-primary">
								Find out more!
							</a>
						</div>
					</div>
					<div className="card size resized">
						<img
							className="card-img-top"
							src="https://images.pexels.com/photos/1707213/pexels-photo-1707213.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Live Broadcast</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title .
							</p>
							<a href="#" className="btn btn-primary">
								Find out more!
							</a>
						</div>
					</div>
					<div className="card size resized">
						<img
							className="card-img-top"
							src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">See everything</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title .
							</p>
							<a href="#" className="btn btn-primary">
								Find out more!
							</a>
						</div>
					</div>
				</div>
				<div className="selector center">
					<h3>Click format to see recommendations</h3>
				</div>
				<ul className="nav nav-tabs d-flex justify-content-around">
					<li className="active">
						<a data-toggle="tab" href="#photo">
							Photo
						</a>
					</li>
					<div />
					<li>
						<a data-toggle="tab" href="#video">
							Video
						</a>
					</li>
				</ul>

				<div className="tab-content">
					<div id="photo" className="tab-pane fade in active">
						<h2>Photo</h2>

						<ul className="nav nav-tabs d-flex justify-content-around">
							<li className="active">
								<a data-toggle="tab" href="#lowbudget">
									low-budget
								</a>
							</li>
							<li>
								<a data-toggle="tab" href="#midbudget">
									mid-budget
								</a>
							</li>
							<li>
								<a data-toggle="tab" href="#bigbudget">
									big-budget
								</a>
							</li>
						</ul>

						<div className="tab-content">
							<div
								id="lowbudget"
								className="tab-pane fade in active">
								<h3>Low-Budget</h3>
								<p>Some content.</p>
								<div className="card">
									<img
										className="card-img-top resized"
										src="https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
										alt="Card image cap"
									/>
									<div className="card-body">
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the cards content.
										</p>
									</div>
								</div>
							</div>
							<div id="midbudget" className="tab-pane fade">
								<h3>Mid-Budget</h3>
								<p>Some content in menu 1.</p>
								<div className="card">
									<img
										className="card-img-top resized"
										src="https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
										alt="Card image cap"
									/>
									<div className="card-body">
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the cards content.
										</p>
									</div>
								</div>
							</div>
							<div
								id="bigbudget"
								className="tab-pane fade in active">
								<h3>High-Budget</h3>
								<p>Some content.</p>
								<div className="card">
									<img
										className="card-img-top resized"
										src="https://images.pexels.com/photos/1655271/pexels-photo-1655271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
										alt="Card image cap"
									/>
									<div className="card-body">
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the cards content.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="video" className="tab-pane fade">
						<h2>Video</h2>
						<ul className="nav nav-tabs d-flex justify-content-around ">
							<li className="active">
								<a data-toggle="tab" href="#lowbudget2">
									low-budget
								</a>
							</li>
							<li className="active">
								<a data-toggle="tab" href="#midbudget2">
									mid-budget
								</a>
							</li>
							<li className="active">
								<a data-toggle="tab" href="#bigbudget2">
									big-budget
								</a>
							</li>
						</ul>

						<div className="tab-content ">
							<div
								id="lowbudget2"
								className="tab-pane fade in active">
								<h3>Low-Budget</h3>
								<p>Some content.</p>
								<div className="flexbox eqflex">
									<div className="card resized">
										<img
											className="card-img-top "
											src="https://images.pexels.com/photos/1002634/pexels-photo-1002634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
											alt="Card image cap"
										/>
										<div className="card-body">
											<p className="card-text">
												Some quick example text to build
												on the card title and make up
												the bulk of the cards content.
											</p>
										</div>
									</div>
									<p>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industrys standard
										dummy text ever since the 1500s, when an
										unknown printer took a galley of type
										and scrambled it to make a type specimen
										book. It has survived not only five
										centuries but also the leap into
										electronic typesetting, remaining
										essentially unchanged. It was
										popularised in the 1960s with the
										release of Letraset sheets containing
										Lorem Ipsum passages, and more recently
										with desktop publishing software like
										Aldus PageMaker including versions of
										Lorem Ipsum.
									</p>
								</div>
							</div>
							<div id="midbudget2" className="tab-pane fade">
								<h3>Mid-Budget</h3>
								<p>Some content in menu 1.</p>
								<div className="card resized">
									<img
										className="card-img-top "
										src="https://images.pexels.com/photos/274924/pexels-photo-274924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
										alt="Card image cap"
									/>
									<div className="card-body">
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the cards content.
										</p>
									</div>
								</div>
							</div>
							<div
								id="bigbudget2"
								className="tab-pane fade in active">
								<h3>High-Budget</h3>
								<p>Some content.</p>
								<div className="card resized">
									<img
										className="card-img-top "
										src="https://images.pexels.com/photos/753859/pexels-photo-753859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
										alt="Card image cap"
									/>
									<div className="card-body">
										<p className="card-text">
											Some quick example text to build on
											the card title and make up the bulk
											of the cards content.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Article;
