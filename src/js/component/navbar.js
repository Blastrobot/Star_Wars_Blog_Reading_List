import React from "react";
import { Link } from "react-router-dom";
import { FavoritesList } from "./favoritesList.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png" alt="Logo" width="100" height="45" class="d-inline-block align-text-top"/>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/characters" className="nav-link text-light">Characters</Link>
						</li>
						<li className="nav-item">
							<Link to="/planets" className="nav-link text-light">Planets</Link>
						</li>
						<li className="nav-item">
							<Link to="/films" className="nav-link text-light">Films</Link>
						</li>
						<FavoritesList/>
						
					</ul>
					{/* <form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form> */}
				</div>
			</div>
		</nav>
	);
};
