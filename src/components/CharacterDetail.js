import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// Tarjeta de detalle. Se filtra por el id. Match significa :id
const CharacterDetail = props => { 
	const {AllCharacters, Match} = props;  
	const CharacterId = parseInt(Match.params.id); 
		return (
			<ul className="CartoonsDetail" >
				{AllCharacters 
				.filter(myCartoon => myCartoon.id === CharacterId)
				.map(item => {
					return (
						<div className="cardDetail" key={item.id}>
							<Link className="DetailLink"to={"/"}>
							<ul className="ContainerCharacterDetail"> 
								<li className="PaintCharacterDetail">
									<div className="CharacterPhotoContainerDetail">
										<img className="CharacterPhotoDetail" src={item.image} alt={`Imagen de ${item.name}`}></img>
									</div>
									<div className="ContainerFeaturesDetail">
										<div className="CharacterNameDetail">{item.name}</div>
										<div className="CharacterSpeciesDetail">{item.species} {(item.species === 'Alien') ? <i className="em em-alien"></i> : <i className="em em-adult"></i>}</div>
										<div className="CharacterStatusDetail">{item.status} {(item.status === 'Dead') ? <i className="em em-black_heart"></i> : '' }</div>
										<div className="CharacterPlanetDetail">{item.origin.name}</div>
										<div className="CharacterEpisodesDetail">{item.episode.length}</div>
										<div className="BackContainer">
											<p className="BackText">Go back</p>
										</div>
									</div>
								</li>
							</ul>
			
							</Link>
						</div>
					)  
				})}
			</ul>
		)

}

CharacterDetail.propTypes = {
	AllCharacters: PropTypes.array, 
	Match: PropTypes.object
	
  };

export default CharacterDetail;

								