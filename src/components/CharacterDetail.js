import React from 'react';

const CharacterDetail = props => { 
	const {AllCharacters, SearchName} = props; 
		return (
			<ul className="CartoonsDetail" >
				{AllCharacters 
				.filter(myCartoon => myCartoon.name.toUpperCase().includes(SearchName.toUpperCase()))
				.map(item => {
					return (
						<div className="card">
							<ul className="ContainerCharacter" key={item.id}> 
								<li className="PaintCharacter">
									<div className="CharacterPhotoContainer">
										<img className="CharacterPhoto" src={item.img} alt={`Imagen de ${item.name}`}></img>
									</div>
									<div className="CharacterName">{item.name}</div>
									<div className="CharacterSpecies">{item.species}</div>
									<div className="CharacterStatus">{item.status}</div>
									<div className="CharacterPlanet">{item.planet}</div>
									<div className="CharacterEpisodes">{item.episode}</div>
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

								