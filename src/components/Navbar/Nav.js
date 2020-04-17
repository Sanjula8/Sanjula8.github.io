import React from "react";
import {
	faGithubAlt,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Navbar/nav.css";
import "../../styles/styles.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<aside className="container">
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
					Hello!
				</p>
				<ul className="nav flex-column bg-white mb-0 main-nav">
					<li className="nav-item">
						<Link
							to="/"
							className={
								window.location.pathname === "/" ||
								window.location.pathname === "/about"
									? "nav-link active"
									: "nav-link"
							}
						>
							<i className="mr-3 text-primary fa-fw"></i>
							<div className="nav-link text-dark">About</div>
						</Link>
					</li>
					{/* <li className="nav-item">
						<a href="/" className="nav-link text-dark bg-light">
							<i className="mr-3 text-primary fa-fw"></i>
							About
						</a>
					</li> */}
					<li className="nav-item">
						<Link
							to="/portfolio"
							className={
								window.location.pathname === "/portfolio"
									? "nav-link active"
									: "nav-link"
							}
						>
							<i className="mr-3 text-primary fa-fw"></i>

							<div className="nav-link text-dark">Portfolio</div>
						</Link>
					</li>
					{/* 
					<li className="nav-item">
						<a href="/portfolio" className="nav-link text-dark">
							Portfolio
						</a>
					</li> */}
					<li className="nav-item">
						<Link
							to="/contact"
							className={
								window.location.pathname === "/contact"
									? "nav-link active"
									: "nav-link"
							}
						>
							<i className="mr-3 text-primary fa-fw"></i>
							<div className="nav-link text-dark">Contact</div>
						</Link>
					</li>
					{/* <li className="nav-item">
						<a href="/contact" className="nav-link text-dark">
							Contact
						</a>
					</li> */}
				</ul>
				<ul className="mt-3 social">
					<li className="ftco-animate">
						<a href="https://www.instagram.com/thesunmademeblind/">
							<FontAwesomeIcon
								className="instagram"
								icon={faInstagram}
							/>
						</a>
					</li>
					<li className="ftco-animate">
						<a href="https://github.com/Sanjula8">
							<FontAwesomeIcon
								className="github"
								icon={faGithubAlt}
							/>
						</a>
					</li>
					<li className="ftco-animate">
						<a href="https://www.linkedin.com/in/sanjula-mahathantila-0046a7a3/">
							<FontAwesomeIcon
								className="github"
								icon={faLinkedin}
							/>
						</a>
					</li>
				</ul>
			</div>
			<footer class="page-footer font-small">
				<div class="footer-copyright">© 2020 Copyright Sanjula</div>
			</footer>
		</aside>
	);
}

export default Navbar;
