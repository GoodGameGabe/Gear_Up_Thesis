import React from "react";
import { BundleList } from "../../component/Gabe/BundleList.jsx";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import PropTypes from "prop-types";

export class Spec extends React.Component {
	render() {
		return (
			<div className="container-fluid text-white">
				<img
					className="img-fluid h-50 w-50"
					src="https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg"
				/>
				<a href="/article" className="inactive row p-3">
					Go Back to Article
				</a>
				<h2>This is a Spec</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec sit amet mauris arcu. Donec tincidunt lorem viverra
					tortor convallis facilisis. Suspendisse pretium leo non
					condimentum rutrum. Cras nec turpis sapien. Vestibulum
					lobortis, diam eget luctus porttitor, ex enim suscipit
					justo, vel porttitor tellus justo eu velit. Duis id luctus
					nisl, et placerat dui. Suspendisse laoreet, lacus ac
					efficitur blandit, diam libero volutpat massa, eget pharetra
					turpis tellus nec justo. Mauris ut mauris eget nunc dapibus
					consequat in at turpis. Nam ac vehicula urna. Mauris ut
					ullamcorper lectus, at congue enim. Aliquam at eros
					lobortis, pulvinar sem ut, facilisis nisl. Sed nunc sem,
					elementum vel urna ac, convallis euismod ante. Aenean
					consectetur leo quis nisi auctor egestas. Pellentesque vel
					interdum odio. In auctor pellentesque ullamcorper. Duis
					blandit aliquam erat, eu ornare nunc pulvinar vitae.
				</p>
				<br />
				<p className="pb-5">
					Sed vel porta sem. Sed consectetur velit non dui blandit
					convallis. Etiam ullamcorper enim arcu, vulputate ultricies
					leo hendrerit eget. Nunc accumsan ut ligula et iaculis.
					Suspendisse porta eleifend diam, quis ultrices libero. Orci
					varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Nunc a leo nisl. Sed fermentum, mi
					finibus porta semper, quam ex tristique nunc, eu dictum diam
					purus vitae tellus.
				</p>
			</div>
		);
	}
}
