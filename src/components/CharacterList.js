import React from 'react';
import CharacterCard from './CharacterCard/index';
import PropTypes from 'prop-types';


// Map y filter. estructura lista genérica. Ul y li

const CharacterList = props => {
		const {AllCharacters, SearchName} = props;
		return (
			<ul clasName="Cartoons">
				{AllCharacters 
				.filter(myCartoon => myCartoon.name.toUpperCase().includes(SearchName.toUpperCase()))
				.map(item => {
					return (
						<li>
							<CharacterCard 
								name={item.name}
								img={item.image}
								species={item.species}
								id={item.ide}/>
						</li>
					); 
				})}
			</ul>
		); 
	};   

CharacterList.propTypes = {
	AllCharacters: PropTypes.array,
	SearchName: PropTypes.string
  };


export default CharacterList;