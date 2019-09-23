const url = "https://rickandmortyapi.com/api/character/"; 

const GetCharacters = () => {
	return fetch(url)
	.then(response => response.json());
  };

export {GetCharacters}; 