import React from "react";

import image from "../images/selfie2.jpg";
import Contact from "../components/Contact";

function About() {
	return (
		<div className="container">
			<div
				class="hero-wrap hero-wrap-2 js-fullheight"
				src={image}
				alt="..."
			></div>
			<div className="js-fullheight d-flex justify-content-center align-items-center article-margin">
				<div className="col-md-8 text text-center">
					<div className="navimage">
						<img
							src={image}
							alt="..."
							width="65"
							className="mr-3 img-thumbnail shadow-sm "
						/>
					</div>
					<div className="desc">
						<h2 className="subheading">Hello I'm</h2>
						<h1 className="mb-4">Sanjula Mahathantila</h1>
						<p className="mb-4">
							I am a full-stack developer with a background in
							neuroscience.
						</p>
						<div className="columns download">
							<p>
								<a
									href="/"
									className="resumebutton btn btn-dark"
								>
									<i className="fa fa-download"></i>Download
									Resume
								</a>
							</p>
						</div>
						<div className="container desc">
							<Contact />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
