import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CharactersCard } from "../component/charactersCard.jsx";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const characters = store.characters;

    useEffect(() => {
        actions.getCharacters();
    }, []);
    
    return(
        <div className="container">
            <h1>Characters</h1>
            <div className="row">
                {characters.map((e, i) => (
                    <CharactersCard key={i} id={i+1} name={e.name} gender={e.gender}/>
                ))}
            </div>
        </div>
    )
};