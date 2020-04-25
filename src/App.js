import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Nav";
import Contact from "./components/Contact/Contact";
// import Navbar1 from "./components/Navbar/OtherNav";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import "./styles/styles.css";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Route exact path="/">
					<About />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
			</Router>
		</div>
	);
}

export default App;
