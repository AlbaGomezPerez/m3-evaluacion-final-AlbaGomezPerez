import React from 'react';

const CharacterDetail = props => { 
	const {AllCharacters, CharacterId } = props; 

		return (
			<ul className="CartoonsDetail" >
				{AllCharacters 
				.filter(myCartoon => myCartoon.id === CharacterId)
				.map(item => {
					return (
						<div className="card">
							<ul className="ContainerCharacter" key={item.id}> 
								<li className="PaintCharacter">
									<div className="CharacterPhotoContainer">
										<img className="CharacterPhoto" src={item.image} alt={`Imagen de ${item.name}`}></img>
									</div>
									<div className="CharacterName">{item.name}</div>
									<div className="CharacterSpecies">{item.species}</div>
									<div className="CharacterStatus">{item.status}</div>
									<div className="CharacterPlanet">{item.planet}</div>
									<div className="CharacterEpisodes">It appears in {	item.episode.length} episodes</div>
								</li>
							</ul>
						</div>
					)  
				})}
			</ul>
		)

}


// // pinta la tarjeta sola de cada personaje. Usar router




export default CharacterDetail;

								