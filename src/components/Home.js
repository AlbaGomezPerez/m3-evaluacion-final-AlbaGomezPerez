import React from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters'; 
import CharacterList from './CharacterList'; 

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
	SearchName: PropTypes.string.isRequired, 
	getNameInput: PropTypes.func, 
	AllCharacters: PropTypes.array
};

export default Home; 