import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CharactersCard } from "../component/charactersCard.jsx";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    const characters = store.characters;

    useEffect(() => {
        actions.getCharacters();
    }, []);

    const handleNextPage = async () => {
        if (store.next) {
            actions.getCharacters(store.next)
        }
    }
    
    const extractIDFromURL = (url) => {
        const regex = /\/(\d+)\/$/;
        const matches = url.match(regex);
        return matches ? matches[1] : null;
    }

    return(
        <div className="container">
            <h1>Characters</h1>
            <div className="row">
                {characters.map((character) => (
                    <CharactersCard key={character.url} id={extractIDFromURL(character.url)} name={character.name} gender={character.gender}/>
                ))}
                {store.next && (
                    <button className="btn btn-primary" onClick={handleNextPage}>More characters</button>
                )}
            </div>
        </div>
    )
};