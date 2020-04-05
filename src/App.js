import React from "react";
import logo from "./logo.svg";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Nav";
import "./App.css";
import "./styles/styles.css";
import Contact from "./components/Contact/Contact";
function App() {
	return (
		<div>
			<Router basename="src">
				<Navbar />
				<Route exact path="/">
					<About />
				</Route>
				<Route exact path="/portfolio">
					<Portfolio />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
			</Router>
		</div>
	);
}

export default App;
