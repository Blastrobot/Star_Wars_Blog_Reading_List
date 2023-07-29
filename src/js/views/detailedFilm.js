import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailedFilm = () => {
    const { store, actions } = useContext(Context);
    const selectFilm = store.selectFilm;

    const imageURL = "https://starwars-visualguide.com/assets/img/films/" + selectFilm?.id + ".jpg"
    const handleErrorIMG = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    const {id} = useParams();
    useEffect(() => {
        actions.getFilm(id);
    }, [id]);

    return (
        <div className="hero bg-dark">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{selectFilm?.title}</h4>
                            <p className="card-text">Episode: {selectFilm?.episode_id}</p>
                            <p className="card-text">Director: {selectFilm?.director}</p>
                            <p className="card-text">Producer: {selectFilm?.producer}</p>
                            <p className="card-text">Release date: {selectFilm?.release_date}</p>
                            <p className="card-text">Opening Crawl: {selectFilm?.opening_crawl}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}