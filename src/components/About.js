import React from "react";

import image from "../images/meandcat.jpg";
import resume from "../resume/smaharesume.pdf";
import "../styles/styles.css";

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
							I am a full-stack developer Far far away, behind the
							word mountains, far from the countries Vokalia and
							Consonantia, there live the blind texts. Separated
							they live in Bookmarksgrove right at the coast of
							the Semantics, a large language ocean.
						</p>
						<div className="columns download">
							<p>
								<a
									href={resume}
									className="resumebutton btn btn-dark"
								>
									<i className="fa fa-download"></i>Download
									Resume
								</a>
							</p>
						</div>
						<div>Skills:</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
