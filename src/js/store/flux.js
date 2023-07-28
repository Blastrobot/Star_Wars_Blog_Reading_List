const URL_FETCH = "https://swapi.tech/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			selectCharacter: [],
			planets: [],
			selectPlanet: [],
			films: [],
			selectFilm: [],
			ships: [],
			favorites: [],
		},
		actions: {
			getCharacters: async () => {
				try {
					const response = await fetch(
						`${URL_FETCH}/people`, {
							method: "GET",
							ContentType: "application/json",
						}
					);
				const data = await response.json();
				setStore({ characters: data.results })
				return data;
				} catch (error) {
					console.log("There was a problem with the fetch" + error);
				}
			},

			getCharacter: (people) => { setStore({ selectCharacter: people, }); },

			getPlanets: async () => {
				try {
					const response = await fetch(
						`${URL_FETCH}/planets`, {
							method: "GET",
							ContentType: "application/json",
						}
					);
					const data = await response.json();
					setStore({ planets: data.results })
					return data;
				} catch (error) {
					console.log("There was a problem with the fetch" + error);
				}
			},

			getPlanet: (planet) => { setStore({ selectPlanet: planet, }); },

			getFilms: async () => {
				try {
					const response = await fetch(
						`${URL_FETCH}/films`, {
							method: "GET",
							ContentType: "application/json",
						}
					);
					const data = await response.json();
					setStore({ films: data.results })
					return data;
				} catch (error) {
					console.log("There was a problem with the fetch" + error);
				}
			},

			getFilm: (film) => { setStore({ selectFilm: film, }); },
		},
	};
};

export default getState;
