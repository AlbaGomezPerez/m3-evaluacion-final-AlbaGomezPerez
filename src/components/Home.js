import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters'; 
import CharacterList from './CharacterList'; 

// página principal. Lo que en un principio es App
const Home = props => {
	const {AllCharacters, SearchName, getNameInput} = props;
	return (
		<React.Fragment>
			<Filters 
				SearchName={SearchName}
				getNameInput={getNameInput}/>
			<CharacterList 
				AllCharacters={AllCharacters}
				SearchName={SearchName}/>
		</React.Fragment>
	);
}; 
	
Home.propTypes = {
	SearchName: PropTypes.string, 
	getNameInput: PropTypes.func, 
	AllCharacters: PropTypes.array
};

export default Home; 