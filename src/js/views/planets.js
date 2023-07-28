import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PlanetsCard } from "../component/planetsCard";

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
                {planets.map((planet) => (
                    <PlanetsCard key={planet.id} planet={planet}/>
                ))}
            </div>
        </div>
    )
};