import React, { useState } from "react";
import axios from "axios";
import "../Contact/contact.css";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
						<h1>
							Get in Touch
							<span className="contact-period">.</span>
						</h1>

						<form onSubmit={handleOnSubmit}>
							<div className="row">
								<div className="col-sm-12">
									<div className="form-group">
										<label
											className="text-gray font-weight-bold text-uppercase px-3"
											htmlFor="email"
										>
											Your Email
										</label>
										<input
											type="email"
											className="form-control"
											id="email"
											name="email"
											required
										/>
									</div>
								</div>
							</div>

							<div className="form-group">
								<label
									className="text-gray font-weight-bold text-uppercase px-3"
									htmlFor="message"
								>
									Your Message
								</label>
								<textarea
									className="form-control"
									id="message"
									name="message"
									rows="5"
									required
								></textarea>
							</div>
							<div className="text-center">
								<button
									type="submit"
									disabled={serverState.submitting}
									className="btn submit-button"
								>
									<i className="fa fa-paper-plane"></i> Send
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
						</form>
						<div className="col-sm-12 email-div">
							<div className="email-info">
								<span className="email-words">
									Or, email me directly at:
								</span>
								<a className="email" href="mailto:sanjula8.com">
									<FontAwesomeIcon
										className="icon"
										icon={faEnvelope}
									/>
									sanjula8@gmail.com
								</a>
							</div>
						</div>
						<div className="social-contact">
							<a
								rel="noreferrer noopener"
								target="_blank"
								href="https://github.com/Sanjula8"
							>
								<FontAwesomeIcon
									className="c-github"
									icon={faGithubAlt}
								/>
							</a>
							<a
								rel="noreferrer noopener"
								target="_blank"
								href="https://www.linkedin.com/in/sanjula-mahathantila-0046a7a3/"
							>
								<FontAwesomeIcon
									className="c-linkedin"
									icon={faLinkedin}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
