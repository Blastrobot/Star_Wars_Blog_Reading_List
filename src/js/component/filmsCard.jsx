import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const FilmsCard = ({id, title}) => {
    const { store, actions } = useContext(Context);
    const film = store.film;

    const imageURL = "https://starwars-visualguide.com/assets/img/films/" + id + "jpg.";
    const handleErrorIMG = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };
    
    const toDetails = () => {
        actions.getFilm(id);
    };

    return(
        <div className="col-md-4 mb-4">
            <div className="card">
                <img alt="" src={imageURL} onError={handleErrorIMG}/>
                <div className="card-body">
                    <h4 className="card-title mb-3">{title}</h4>
                    <div className="d-flex justify-content-between">
                        <Link to={`/film/${id}`} className="btn btn-outline-info" onClick={toDetails}>
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