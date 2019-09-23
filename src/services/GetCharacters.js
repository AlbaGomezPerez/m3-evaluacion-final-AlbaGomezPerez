const url = ""; 

const GetCharacters = () => {
	return fetch(url)
	.then(response => response.json());
  };

export {GetCharacters}; 