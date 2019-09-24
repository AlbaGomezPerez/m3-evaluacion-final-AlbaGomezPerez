import React from 'react';
import { Link } from "react-router-dom";

const CharacterDetail = props => { 
	const {AllCharacters, Match} = props;  
	const CharacterId = parseInt(Match.params.id); 
		return (
			<ul className="CartoonsDetail" >
				{AllCharacters 
				.filter(myCartoon => myCartoon.id === CharacterId)
				.map(item => {
					return (
						<div className="card" key={item.id}>
							<Link to={"/"}>
							<ul className="ContainerCharacter"> 
								<li className="PaintCharacter">
									<div className="CharacterPhotoContainer">
										<img className="CharacterPhoto" src={item.image} alt={`Imagen de ${item.name}`}></img>
									</div>
									<div className="CharacterName">{item.name}</div>
									<div className="CharacterSpecies">{item.species}</div>
									<div className="CharacterStatus">{item.status}</div>
									<div className="CharacterPlanet">{item.origin.name}</div>
									<div className="CharacterEpisodes">It appears in {item.episode.length} episodes</div>
								</li>
							</ul>
							<div className="BackContainer">
								<p className="BackText">Go back</p>
							</div>
							</Link>
						</div>
					)  
				})}
			</ul>
		)

}


// // pinta la tarjeta sola de cada personaje. Usar router




export default CharacterDetail;

								