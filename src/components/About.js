import React from "react";
import image from "../images/Selfie.JPG";

function About() {
	return (
		<div className="container">
			<div className="js-fullheight d-flex justify-content-center align-items-center">
				<div className="col-md-8 text text-center">
					<div>
						<img
							src={image}
							alt="..."
							width="65"
							className="mr-3 img-thumbnail shadow-sm "
						/>
					</div>
					<div className="desc">
						<h2 className="subheading">Hello I'm</h2>
						<h1 className="mb-4">Elen Henderson</h1>
						<p className="mb-4">
							I am A Blogger Far far away, behind the word
							mountains, far from the countries Vokalia and
							Consonantia, there live the blind texts. Separated
							they live in Bookmarksgrove right at the coast of
							the Semantics, a large language ocean.
						</p>
						<ul className="ftco-social mt-3">
							<li className="ftco-animate">
								<a href="#">
									<span className="icon-twitter"></span>
								</a>
							</li>
							<li className="ftco-animate">
								<a href="#">
									<span className="icon-facebook"></span>
								</a>
							</li>
							<li className="ftco-animate">
								<a href="#">
									<span className="icon-instagram"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		// <div
		// 	className="page-content p-5 hero-wrap hero-wrap-2 js-fullheight"
		// 	id="content"
		// >
		// 	<div className="navimage">
		// 		<img
		// 			src={image}
		// 			alt="..."
		// 			width="65"
		// 			className="mr-3 img-thumbnail shadow-sm "
		// 		/>
		// 	</div>
		// </div>

		// <div className="page-content p-5" id="content">
		// 	<div className="navimage">
		//
		// 	</div>
		// 	<div className="hero-wrap hero-wrap-2 js-fullheight">
		// 		<h2 className="display-4 text-white">Hello I'm...</h2>
		// 		<p className="lead text-white mb-0">About me..</p>

		// 		<div className="separator"></div>
		// 		<div className="row text-white">
		// 			<div className="col-lg-7"></div>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default About;
