import React from "react";

// import image from "../../images/meandcat.jpg";
import image from "../../images/meandcat.jpg";
// import resume from "../../resume/smaharesume.pdf";
import resume from "../../resume/smaharesume.pdf";
// import "../styles/styles.css";
import "../About/about.css";

function About() {
	return (
		<div className="container about-container">
			<div src={image} alt="selfie"></div>
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
					<div className="desc scrollbar scrollbar-primary">
						<h2 className="subheading">Hello I'm</h2>
						<h1 className="mb-4">Sanjula Mahathantila</h1>
						<p className="mb-4">
							Full Stack Developer with certification from
							Southern Methodist University including skills in
							JavaScript, React, Node.js, responsive development,
							and more. Bachelor’s degree in Neuroscience with
							minors in Anthropology and Psychology from the
							University of Nebraska – Omaha. Strengths in
							effective planning and communication with skills in
							delegation, processes, and technology with
							integration of different cultures and backgrounds.
						</p>
						<div className="skills">Skills</div>
						<div>
							Git | JavaScript | Node.js | React.js | CSS | HTML5
							ES6 | Express.js | AJAX MERN Stack | MongoDB |
							Mongoose MySQL | Sequelize
						</div>
						<div className="columns download">
							<p>
								<a
									href={resume}
									className="resume-button btn btn-dark"
								>
									<i className="fa fa-download"></i>Download
									Resume
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
