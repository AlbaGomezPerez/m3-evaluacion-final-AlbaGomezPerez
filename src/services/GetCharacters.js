const url = "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json"; 

const GetCharacters = () => {
	return fetch(url)
	.then(response => response.json());
  };

export {GetCharacters}; 