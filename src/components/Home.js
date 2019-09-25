import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters'; 
import CharacterList from './CharacterList'; 

// página principal. Lo que en un principio es App
const Home = props => {
	const {AllCharacters, SearchName, getNameInput, SearchGender, getGender} = props;
	return (
		<React.Fragment>
			<Filters 
				SearchName={SearchName}
				getNameInput={getNameInput}
				getGender={getGender}/>
			<CharacterList 
				AllCharacters={AllCharacters}
				SearchName={SearchName}
				SearchGender={SearchGender}/>
		</React.Fragment>
	);
}; 
	
Home.propTypes = {
	SearchName: PropTypes.string, 
	getNameInput: PropTypes.func, 
	AllCharacters: PropTypes.array,
	SearchGender: PropTypes.string, 
	getGender: PropTypes.func
};

export default Home; 