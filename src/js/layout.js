import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { DetailedCharacter } from "./views/detailedCharacter";
import { Planets } from "./views/planets";
import { DetailedPlanet } from "./views/detailedPlanet";
import { Films } from "./views/films";
import { DetailedFilm } from "./views/detailedFilm";
import { Ships } from "./views/ships";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/character/:id" element={<DetailedCharacter />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="/planet/:id" element={<DetailedPlanet />} />
						<Route path="/films" element={<Films />} />
						<Route path="/film/:id" element={<DetailedFilm />} />
						<Route path="/ships" element={<Ships />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
	);
};

export default injectContext(Layout);
