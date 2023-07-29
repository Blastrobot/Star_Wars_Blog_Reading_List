const URL_FETCH = "https://swapi.dev/api";
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
				const store = getStore();
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

			getCharacter: async (id) => {
				console.log("Selected character to fetch:", id);
				try {
					const response = await fetch(
						`${URL_FETCH}/people/${id}`, {
							method: "GET",
							header: {
								"Content-Type": "application/json",
							},
						});
					const data = await response.json();
					setStore({ selectCharacter: data });
					console.log("Selected character back from fetch: ", data);
					// return data;
				} catch (error) {
					console.log("There was sa problem with the single char fetch" + error);
				}
			},

			getPlanets: async () => {
				const store = getStore();
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
					console.log("There was a problem with the general planet fetch" + error);
				}
			},

			getPlanet: async (id) => { 
				console.log("Selected planet to fetch:", id);
				try {
					const response = await fetch(`${URL_FETCH}/planets/${id}`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					const data = await response.json();
					setStore({ selectPlanet: data });
					console.log("Selected planet data back from fetch: ", data);
					return data;
				} catch (error) {
					console.log("There was a problem with the single planet fetch" + error);
				}
			},

			getFilms: async () => {
				const store = getStore();
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

			getFilm: async (id) => {
				console.log("Selected film to fetch: ", id);
				try {
					const response = await fetch(`${URL_FETCH}/films/${id}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
					const data = await response.json();
					setStore({ selectFilm: data });
					console.log("Selected film data back from fetch: ", data);
					return data;
				} catch (error) {
					console.log("There was a problem with the single film fetch" + error);
				}
			},

			addFav: (item) => {
				const store = getStore();
				const isDuplicate = store.favorites.some(fav => fav.id === item.id);
				if (!isDuplicate) {
					const updatedFavs = [...store.favorites, item];
					setStore({ favorites: updatedFavs });
				}
			},

			deleteFav: (id) => {
				const store = getStore();
				const updatedFavs = store.favorites.filter(item => item.id !== id);
				setStore({ favorites: updatedFavs });
			}
		},
	};
};

export default getState;
