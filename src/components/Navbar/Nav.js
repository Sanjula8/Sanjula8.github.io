import React from "react";

function Navbar() {
	return (
		<div className="container">
			<div
				className="vertical-nav bg-white s-fullheight text-center"
				id="sidebar"
			>
				<div className="py-4 px-3 mb-4 bg-light">
					<div className="media d-flex align-items-center">
						<div className="media-body">
							<h4 className="m-0 nav-name">
								sanjula<span className="period">.</span>
							</h4>
							<p className="font-weight-light text-muted mb-0">
								Full Stack Developer{" "}
							</p>
						</div>
					</div>
				</div>

				<p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
					Main
				</p>

				<ul className="nav flex-column bg-white mb-0">
					<li className="nav-item">
						<a href="/" className="nav-link text-dark bg-light">
							<i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="/About" className="nav-link text-dark">
							<i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
							About
						</a>
					</li>
					<li className="nav-item">
						<a href="/Portfolio" className="nav-link text-dark">
							<i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
							Portfolio
						</a>
					</li>
					<li className="nav-item">
						<a href="/Contact" className="nav-link text-dark">
							<i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
							Contact
						</a>
					</li>
				</ul>
				<div classname="nav-footer">
					<ul>
						<li>
							<a href="#">
								<i className="fa-fa-facebook icon-facebook"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="icon-twitter"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="icon-instagram"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="icon-linkedin"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
