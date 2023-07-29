import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const FavoritesList = () => {
    const { store, actions } = useContext(Context);
    const favorites = store.favorites;

    const handleDeleteFav = (name, id) => {
        actions.deleteFav(name, id);
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
                    <li key={i}>
                        <Link to={`/details/${favorites.id}`} className="dropdown-item align-items-center">
                            {favorites.name}
                        </Link>
                        <button className="btn btn-link" type="submit" onClick={() => handleDeleteFav(favorites.name, favorites.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}