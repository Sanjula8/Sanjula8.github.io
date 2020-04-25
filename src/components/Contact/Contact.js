import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import catselfie from "../../images/meandcat.jpg";
import "../Contact/contact.css";

function Contact() {
	return (
		<div className="container contact-container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 m-auto">
					<div className="contact-form">
						<h1>Get in Touch</h1>
					</div>

					<img
						className="catselfie"
						src={catselfie}
						alt="catselfie"
					/>
					<div>
						<a
							className="email col-md-8 col-md-offset-2 m-auto"
							href="mailto:sanjula8.com"
						>
							<FontAwesomeIcon
								className="instagram"
								icon={faEnvelope}
							/>
							Email Me: sanjula8@gmail.com
						</a>
					</div>
					<div>
						<a
							className="phone col-md-8 col-md-offset-2 m-auto"
							href="tel:7123108673"
						>
							<FontAwesomeIcon
								className="instagram"
								icon={faMobile}
							/>
							Call Me: 712-310-8673
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

//	{/* <div className="row">
{
	/* <div className="col-md-8 col-md-offset-2 m-auto">
<div>
    <h2 className="email">Email</h2>
    sanjula8@gmail.com
</div>
</div>
</div>
<div className="row">
<div className="col-md-8">
<h2 className="phone-number">Phone Number</h2>
sanjula8@gmail.com
</div>
</div> */
}
// </div>
// <div className="row">
// <div className="col-md-4 col-md-offset-2 m-auto justify-content-around">
// <div className="row">
// <h2 className="email">Email</h2>
// </div>
// <div className="row">sanjula8@gmail.com </div>
// </div>
// <div className="col-md-4 col-md-offset-2 m-auto d-flex justify-content-around">
// <h2 className="phone">Phone</h2>
// </div> */}
{
	/* <div className="col-md-4 col-md-offset-2 m-auto d-flex justify-content-around">
<h2 className="email">Phone</h2>
</div> */
}
// </div>
// <div className="row mx-auto">
// <div className="col-md-4 col-md-offset-2 m-auto d-flex justify-content-around">
// sanjula8@gmail.com
// </div>
// <div className="col-md-4 col-md-offset-2 m-auto d-flex justify-content-around">
// phone thingy
// </div>
{
	/* <div className="col-md-4 col-md-offset-2 m-auto d-flex justify-content-around">
phone thingy
</div> */
}
