import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsCard = ( {id, name, climate, diameter, gravity, population, terrain} ) => {
    const { store, actions } = useContext(Context);
    const planet = store.planet;

    const imageURL = "https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg";
    const handleErrorIMG = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    const toDetails = () => {
        actions.getPlanet(id);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img alt="" src={imageURL} onError={handleErrorIMG}/>
                <div className="card-body">
                    <h4 className="card-title mb-3">{name}</h4>
                    <div className="d-flex justify-content-between">
                        <Link to={`/planet/${id}`} className="btn btn-outline-info" onClick={toDetails}>
                            Details
                        </Link>
                        <button className="btn btn-light">
                            <i className="far fa-heart" style={{color: "#ff0000"}} onClick={toDetails}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}