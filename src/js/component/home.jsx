import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"




//create your first component
const Home = () => {
	return (<>
		<NavBar/>
		<Jumbotron/>
		<div className="container text-center d-flex flex-wrap">
		<Card/>
		<Card/>
		<Card/>
		<Card/>
		</div>
		<Footer/>
		</>
	);
};

export default Home;
