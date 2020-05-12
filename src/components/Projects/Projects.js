import React from "react";
import "./projects.css";
import "../../styles/styles.css";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import charityhub from "../../images/CharityHub.png";
import stocks from "../../images/Stocks.png";
import whisket from "../../images/Whisket.png";

function Projects() {
	return (
		<div className="container project-container">
			<div className="row">
				<div className="">
					<img src={charityhub} alt="CharityHub" />
					<div className="info">
						<div className="project-title">Charity Hub</div>
						<div>
							<a
								style={{ display: "table-cell" }}
								href="https://afternoon-reaches-31810.herokuapp.com/"
								rel="noreferrer noopener"
								target="_blank"
							>
								Deployment
							</a>
						</div>
						<div>
							<a
								style={{ display: "table-cell" }}
								href="https://github.com/Sanjula8/Charity"
								rel="noreferrer noopener"
								target="_blank"
							>
								Source Code
							</a>
						</div>
					</div>
				</div>
				<div className="">
					<img src={whisket} alt="Whisket" />
					<div className="info">
						<div className="project-title">Whisket</div>
						<div>
							<a
								style={{ display: "table-cell" }}
								href="https://quiet-badlands-95961.herokuapp.com/"
								rel="noreferrer noopener"
								target="_blank"
							>
								Deployment
							</a>
						</div>
						<div>
							<a
								style={{ display: "table-cell" }}
								href="https://github.com/BrettSevy/project3"
								rel="noreferrer noopener"
								target="_blank"
							>
								Source Code
							</a>
						</div>
					</div>
				</div>
				<div className="">
					<img src={stocks} alt="Stocks" />
					<div className="info">
						<div className="project-title">Stocks Management</div>
						<div>
							<a
								style={{ display: "table-cell" }}
								href="https://project2-umesh-brett-javier-sa.herokuapp.com/"
								rel="noreferrer noopener"
								target="_blank"
							>
								Deployment
							</a>
						</div>
						<div>
							<a
								style={{ display: "table-cell" }}
								href="https://github.com/Sanjula8/project-2"
								rel="noreferrer noopener"
								target="_blank"
							>
								Source Code
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
