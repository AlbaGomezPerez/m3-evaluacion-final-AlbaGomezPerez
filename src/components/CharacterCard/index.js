import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = props => {
  const {name, img, species, id} = props;
  return (
	<div className="card">
		<ul className="ContainerCharacter" key={id}> 
			<li className="PaintCharacter">
			<div className="CharacterPhotoContainer">
				<img className="CharacterPhoto" src={img} alt={`Imagen de ${name}`}></img>
			</div>
			<div className="CharacterName">{name}</div>
  <div className="CharacterSpecies">{species} {(species === 'Alien') ? <i class="em em-alien"></i> : <i class="em em-adult"></i>}</div>
								
			</li>
		</ul>
    </div>
  );
};

CharacterCard.propTypes = {
	name: PropTypes.string,
	img: PropTypes.string, 
	species: PropTypes.string,
	id: PropTypes.number
  };


// estructura de como es la tarjeta. Nombre, imagen...



export default CharacterCard;
