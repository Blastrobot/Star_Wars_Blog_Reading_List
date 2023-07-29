import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const FavoritesList = () => {
    const { store, actions } = useContext(Context);
    const favorites = store.favorites;

    const removeFavorites = (id) => {
        actions.deleteFav(id);
    };
    
    return (
        <div className="dropdown">
            <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites: {favorites.length}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {!favorites.length && (
                    <li className="dropdown-item">Add some favorites! 😍</li>
                )}
                {favorites.map((favorites, i) => (
                    <li key={i} className="d-flex dropdown-item">
                        <Link to={`/${favorites.type}/${favorites.id}`} className="dropdown-item align-items-center">
                            {favorites.name}
                        </Link>
                        <button className="btn btn-link" type="submit" onClick={() => removeFavorites(favorites.id)}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}