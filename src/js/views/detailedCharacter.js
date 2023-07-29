import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailedCharacter = () => {
    const { store, actions } = useContext(Context);
    const selectCharacter = store.selectCharacter;

    const imageURL = "https://starwars-visualguide.com/assets/img/characters/" + selectCharacter?.id + ".jpg"
    const handleErrorIMG = (e) => {
        e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    const {id} = useParams();
    useEffect(() => {
        actions.getCharacter(id);
    }, [id]);

    return (
        <div className="hero bg-dark">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{selectCharacter?.name}</h4>
                            <p className="card-text">Birth Year: {selectCharacter?.birth_year}</p>
                            <p className="card-text">Gender: {selectCharacter?.gender}</p>
                            <p className="card-text">Height: {selectCharacter?.height}</p>
                            <p className="card-text">Hair color: {selectCharacter?.hair_color}</p>
                            <p className="card-text">Eye color: {selectCharacter?.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}