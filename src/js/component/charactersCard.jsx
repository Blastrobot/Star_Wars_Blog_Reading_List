import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharactersCard = ({id, name}) => {
    const { store, actions } = useContext(Context);
    const character = store.character;

    const imageURL = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
    const handleErrorIMG = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }

    const toDetails = () => {
        actions.getCharacter(id);
    };

    const handleAddToFav = () => {
        actions.addFav({ id, name })
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img alt="" src={imageURL} onError={handleErrorIMG}/>
                <div className="card-body">
                    <h4 className="card-title mb-3">{name}</h4>
                    <div className="d-flex justify-content-between">
                        <Link to={`/character/${id}`} className="btn btn-outline-info" onClick={toDetails}>
                            Details
                        </Link>
                        <button className="btn btn-light">
                            <i className="far fa-heart" style={{color: "#ff0000"}} onClick={() => handleAddToFav(id, name)}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}