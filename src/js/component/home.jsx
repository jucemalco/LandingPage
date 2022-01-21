import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card.js";
import Footer from "./Footer.js";

//create your first component

function Home() {
	let cardNumbers = 4;
	let cards = [];
	for (let i = 0; i < cardNumbers; i++) {
		cards.push(<Card />);
	}

	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex justify-content-between">{cards}</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
