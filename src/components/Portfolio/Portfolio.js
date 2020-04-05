import React from "react";
import "../Portfolio/portfolio.css";
import imageone from "../../images/image_4.jpg";
import imagetwo from "../../images/image_9.jpg";
import imagethree from "../../images/bg_2.jpg";

function Portfolio() {
	return (
		<div className="container portfolio-container">
			<div className="row">
				<div className="">
					<img src={imageone} alt="Snow" />
					<div className="info">
						<div>Email</div>
						<div>Gender</div>
						<div>Phoner</div>
					</div>
				</div>
				<div className="">
					<img src={imagethree} alt="Forest" />
					<div className="info">
						<div>Email</div>
						<div>Gender</div>
						<div>Phoner</div>
					</div>
				</div>
				<div className="">
					<img src={imagethree} alt="Mountains" />
					<div className="info">
						<div>Email</div>
						<div>Gender</div>
						<div>Phoner</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
