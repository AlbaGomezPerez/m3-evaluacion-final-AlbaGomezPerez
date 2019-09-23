import React from 'react';

// no pinta nada, solo hace filter y map y luego es llamada 
// en otro sitio

class Filters extends React.Component{
	render() {
		const {AllCharacters} = this.props;
		return (
			<React.Fragment>
				{AllCharacters 
				.map((item, index) => 
					<ul className="containerCharacter" key={index}> 
						<li className="paintCharacter">
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


export default Filters;

