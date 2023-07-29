import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailedPlanet = () => {
    const { store, actions } = useContext(Context);
    const selectPlanet = store.selectPlanet;

    const imageURL = "https://starwars-visualguide.com/assets/img/planets/" + selectPlanet.id + ".jpg"
    const handleErrorIMG = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };
    
    const {id} = useParams();
    useEffect(() => {
        actions.getPlanet(id)
    }, [id])

    return (
        <div className="hero bg-dark">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{selectPlanet?.name}</h4>
                            <p className="card-text">Climate: {selectPlanet?.climate}</p>
                            <p className="card-text">Diameter: {selectPlanet?.diameter}</p>
                            <p className="card-text">Gravity: {selectPlanet?.gravity}</p>
                            <p className="card-text">Population: {selectPlanet?.population}</p>
                            <p className="card-text">Terrain: {selectPlanet?.terrain}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}