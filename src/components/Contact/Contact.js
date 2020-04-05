import React from "react";
import "../Contact/contact.css";

function Contact() {
	return (
		<div className="container contact-container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 m-auto">
					<div className="contact-form">
						<h1>Get in Touch</h1>
						<form
							action="/examples/actions/confirmation.php"
							method="post"
						>
							{/* <h2>
                                Name: Sanjula Mahathantila
                            </h2>
                            <h2>
                                Email: Sanjula8@gmail.com
                            </h2> */}
							<div className="row">
								<div className="col-sm-6">
									<div className="form-group">
										<label for="inputName">Name</label>
										<input
											type="text"
											className="form-control"
											id="inputName"
											required
										/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="form-group">
										<label for="inputEmail">Email</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail"
											required
										/>
									</div>
								</div>
							</div>
							<div className="form-group">
								<label for="inputSubject">Subject</label>
								<input
									type="text"
									className="form-control"
									id="inputSubject"
									required
								/>
							</div>
							<div className="form-group">
								<label for="inputMessage">Message</label>
								<textarea
									className="form-control"
									id="inputMessage"
									rows="5"
									required
								></textarea>
							</div>
							<div className="text-center">
								<button
									type="submit"
									className="btn btn-primary"
								>
									<i className="fa fa-paper-plane"></i> Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
