import React from 'react';
import PropTypes from 'prop-types';

// no pinta nada, solo hace filter y map y luego es llamada 
// en otro sitio

class Filters extends React.Component{
	render() {
		const {AllCharacters, SearchName} = this.props;
		return (
			<React.Fragment>
				{AllCharacters 
				.filter(myCartoon => myCartoon.name.toUpperCase().includes(SearchName.toUpperCase()))
				.map((item, index) => 
					<ul className="ContainerCharacter" key={index}> 
						<li className="PaintCharacter">
							<div className="CharacterPhotoContainer">
								<img className="CharacterPhoto" src={item.image} alt='PhotoCharacter'></img>
							</div>
							<div className="CharacterName">{item.name}</div>
							<div className="CharacterSpecies">{item.species}</div>
							
						</li>
					</ul>
					)}
			</React.Fragment>
		); 
	} 
}; 

Filters.propTypes = {
	AllCharacters: PropTypes.array,
	SearchName: PropTypes.string
  };


export default Filters;

