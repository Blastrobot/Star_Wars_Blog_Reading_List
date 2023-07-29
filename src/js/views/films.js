import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { FilmsCard } from "../component/filmsCard.jsx";

export const Films = () => {
	const { store, actions } = useContext(Context);
	const films = store.films;

	useEffect(() => {
		actions.getFilms();
	}, []);

	return(
		<div className="container">
			<h1>Films</h1>
			<div className="row">
				{films.map((e, i) => (
					<FilmsCard key={i} id={i+1} title={e.title}/>
				))}
			</div>
		</div>
	)
}