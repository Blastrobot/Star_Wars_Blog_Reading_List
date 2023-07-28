import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsCard = () => {
    const { store, actions } = useContext(Context);
    const planet = store.planet;

    const imageURL = "";
    const handleErrorIMG = (e) => {
        e.target.src = "";
    };

    return (
        <div>
            
        </div>
    )
}