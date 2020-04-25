import React from "react";

import { Nav, Navbar } from "react-bootstrap";
// import "../Navbar/nav.css";
import "../Navbar/othernav.css";

function Navbar1() {
	return (
		<div>
			<aside>
				<Navbar expand="lg" className="vertical-nav">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav
							defaultActiveKey="/home"
							className="flex-column flex-sm-column"
						>
							<Nav.Link href="/home">Active</Nav.Link>
							<Nav.Link eventKey="link-1">Link</Nav.Link>
							<Nav.Link eventKey="link-2">Link</Nav.Link>
							<Nav.Link eventKey="disabled" disabled>
								Disabled
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</aside>
		</div>
	);
}

export default Navbar1;
