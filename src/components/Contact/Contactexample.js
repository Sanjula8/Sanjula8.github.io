import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import catselfie from "../../images/meandcat.jpg";
import "../Contact/contact.css";

function Contact() {
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null,
	});
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg },
		});
		if (ok) {
			form.reset();
		}
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: "https://formspree.io/xrgannqr",
			data: new FormData(form),
		})
			.then((r) => {
				handleServerResponse(true, "Thanks!", form);
			})
			.catch((r) => {
				handleServerResponse(false, r.response.data.error, form);
			});
	};
	return (
		<div className="container contact-container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 m-auto">
					<div className="contact-form">
						<h1>Get in Touch</h1>

						<form onSubmit={handleOnSubmit}>
							<div className="row">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<label htmlFor="email">
												Your Email:
											</label>
											<input
												className="col-md-8 col-md-offset-2 m-auto"
												id="email"
												type="email"
												name="email"
												placeholder="Email"
												required
											/>
										</div>
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="message">
										Your Message:
									</label>
									<textarea
										id="message"
										name="message"
									></textarea>
								</div>
								<div className="row">
									<button
										type="submit"
										disabled={serverState.submitting}
									>
										Submit
									</button>
									{serverState.status && (
										<p
											className={
												!serverState.status.ok
													? "errorMsg"
													: ""
											}
										>
											{serverState.status.msg}
										</p>
									)}
								</div>
							</div>
						</form>
					</div>
					<div className="row">
						{/* <img
							className="col-md-4 col-md-offset-2 m-auto catselfie"
							src={catselfie}
							alt="catselfie"
						/> */}
						<div className="col-md-8 col-md-offset-2 m-auto pb-5 info">
							<div></div>
							<div className="city">Based in Dallas, Texas</div>
							<div>
								<a className="email" href="mailto:sanjula8.com">
									<FontAwesomeIcon
										className="icon"
										icon={faEnvelope}
									/>
									Email Me: sanjula8@gmail.com
								</a>
							</div>
							<div>
								{/* <a className="phone" href="tel:7123108673">
									<FontAwesomeIcon
										className="icon"
										icon={faMobile}
									/>
									Call Me: (712) 310-8673
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

// {/* <div className="row">
// 				<div className="col-md-8 col-md-offset-2 m-auto">
// 					<div className="contact-form">
// 						<h1>Get in Touch</h1>
// 					</div>
// 					<div className="row">
// 						{/* <img
// 							className="col-md-4 col-md-offset-2 m-auto catselfie"
// 							src={catselfie}
// 							alt="catselfie"
// 						/> */}
// 						<div className="col-md-8 col-md-offset-2 m-auto pb-5 info">
// 							<div></div>
// 							<div className="city">Based in: Dallas, Texas</div>
// 							<div>
// 								<a className="email" href="mailto:sanjula8.com">
// 									<FontAwesomeIcon
// 										className="icon"
// 										icon={faEnvelope}
// 									/>
// 									Email Me: sanjula8@gmail.com
// 								</a>
// 							</div>
// 							<div>
// 								{/* <a className="phone" href="tel:7123108673">
// 									<FontAwesomeIcon
// 										className="icon"
// 										icon={faMobile}
// 									/>
// 									Call Me: (712) 310-8673
// 								</a> */}
// 							</div>
// 						</div>
// 					</div>
// 					<div className="row">
// 						<form onSubmit={handleOnSubmit}>
// 							<label htmlFor="email">Your Email:</label>
// 							<input
// 								id="email"
// 								type="email"
// 								name="email"
// 								required
// 							/>
// 							<label htmlFor="message">Your Message:</label>
// 							<textarea id="message" name="message"></textarea>
// 							<button
// 								type="submit"
// 								disabled={serverState.submitting}
// 							>
// 								Submit
// 							</button>
// 							{serverState.status && (
// 								<p
// 									className={
// 										!serverState.status.ok ? "errorMsg" : ""
// 									}
// 								>
// 									{serverState.status.msg}
// 								</p>
// 							)}
// 						</form>
// 					</div>
// 				</div>
// 			</div> */}
