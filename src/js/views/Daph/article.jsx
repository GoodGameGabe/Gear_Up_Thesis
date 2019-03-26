import React from "react";

const article = () => {
	return (
		<div className="card size">
			<img
				className="card-img-top"
				src="https://via.placeholder.com/150"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.Lorem Ipsum is simply dummy
					text of the printing and typesetting industry. Lorem Ipsum
					has been the industry&#39;s standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived
					not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was
					popularised in the 1960s with the release of Letraset sheets
					containing Lorem Ipsum passages, and more recently with
					desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.
				</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};

export default article;
