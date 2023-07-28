import React from "react";
import background from "../../img/starwars_tatooine_sunset_bg.jpg"
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	// <div className="background">
		<img className="background" src={background} style={{ width: "100%", height: "100%"}}/>
	// </div>
);
