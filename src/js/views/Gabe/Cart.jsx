import React from "react";
import { BundleList } from "../../component/Gabe/BundleList.jsx";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import PropTypes from "prop-types";

export class Cart extends React.Component {
	render() {
		return (
			<div className="container-fluid row">
				{/* Left Side */}
				<div className="col-6 p-3">
					<div className="row mt-3 ml-3">
						<h2 className="text-white">Cart</h2>
					</div>

					<div
						className="row pt-3 m-2 border border-white"
						id="cards-container">
						<div className="col-4 mt-3" id="card-left">
							<img
								src="https://i.cbc.ca/1.4732241.1530645784!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/liron-gertsman.jpg"
								className="img-thumbnail"
							/>
						</div>

						<div className="col-8" id="card-right">
							<h4 className="text-white">
								I Got My Nephew To Do It
							</h4>
							<ul className="list-unstyled">
								<li className="pt-2">
									<a
										className="text-white"
										href="https://www.amazon.com/Canon-Mark-Frame-Digital-Camera/dp/B01KURGS9E">
										Canon EOS 5D Mark IV Full Frame Digital
										SLR Camera Body
									</a>
								</li>
								<li className="pt-3">
									<a
										className="text-white"
										href="https://www.amazon.com/Canon-24-70mm-2-8L-Standard-Zoom/dp/B0076BNK30">
										Canon EF 24-70mm f/2.8L II USM Standard
										Zoom Lens
									</a>
								</li>
								<li className="pt-3">
									<a
										className="text-white"
										href="https://www.amazon.com/Vanguard-Alta-Pro-263AB-100/dp/B003WKOENO">
										Vanguard Alta Pro 263AB 100 Aluminum
										Tripod with SBH-100 Ball Head for Sony,
										Nikon, Canon DSLR Cameras, Black
									</a>
								</li>
								<li className="pt-3">
									<a
										className="text-white"
										href="https://www.amazon.com/Rode-Lightweight-Microphone-Integrated-Shockmount/dp/B00GQDORA4">
										Rode VideoMic GO Light Weight On-Camera
										Microphone
									</a>
								</li>
							</ul>
							<h2 className="text-white text-right">$1000.00</h2>
						</div>
					</div>

					<div
						className="row pt-3 m-2 border border-white"
						id="cards-container">
						<div className="col-4 mt-3" id="card-left">
							<img
								src="https://www.rentacross.com/uploads/media/1/camera-on-rent.jpg"
								className="img-thumbnail"
							/>
						</div>

						<div className="col-8" id="card-right">
							<h4 className="text-white">
								Quick Nikon Replacement
							</h4>
							<ul className="list-unstyled">
								<li className="pt-2">
									<a
										className="text-white"
										href="https://www.amazon.com/Nikon-DX-Format-3-5-5-6G-70-300mm-4-5-6-3G/dp/B07GWKDLGT">
										Nikon D3500 W/ AF-P DX NIKKOR 18-55mm
										f/3.5-5.6G VR Black
									</a>
								</li>
								<li className="pt-3">
									<a
										className="text-white"
										href="https://www.amazon.com/SanDisk-Ultra-UHS-I-Memory-SDSDUNC-064G-GN6IN/dp/B0143IIP4W">
										SanDisk 64GB Ultra SDXC UHS-I Memory
										Card SDSDUNC-064G-GN6IN
									</a>
								</li>
							</ul>
							<h2 className="text-white text-right">$540.00</h2>
						</div>
					</div>
				</div>

				<div className="col-6">
					<h2 className="text-white">Price: $1,540</h2>
					<Link to={"/checkout"}>
						<button>Proceed to Checkout</button>
					</Link>
				</div>
			</div>
		);
	}
}
