import React from "react";
import logo from "./logo.svg";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar/Nav";
import "./App.css";
import "./styles/styles.css";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<About />
			<Projects />
		</BrowserRouter>
	);
}

export default App;
