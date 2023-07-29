import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PlanetsCard } from "../component/planetsCard.jsx";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const planets = store.planets;

    useEffect(() => {
        actions.getPlanets();
    }, []);
    
    return(
        <div className="container">
            <h1>Planets</h1>
            <div className="row">
                {planets.map((e, i) => (
                    <PlanetsCard key={i} id={i+1} name={e.name} climate={e.climate} diameter={e.diameter} />
                ))}
            </div>
        </div>
    )
};