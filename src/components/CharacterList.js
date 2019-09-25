import React from 'react';
import CharacterCard from './CharacterCard/index';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


// Map y filter. estructura lista genérica. Ul y li

const CharacterList = props => {
		const {AllCharacters, SearchName, SearchGender} = props;
		return (
			<ul className="Cartoons" >
				{AllCharacters 
				.filter(myCartoon => myCartoon.name.toUpperCase().includes(SearchName.toUpperCase()))
				.filter(myCartoon => {
					if (SearchGender === "All") {
						return true; 
					} else {
						if (
							SearchGender === myCartoon.gender
						){
							return true; 
						}
						return false; 
					} 
				})

				.map(item => {
					return (
						<li key={item.id}>
							<Link className="CardLink" to={"/character/" + item.id}>
								<CharacterCard 
									name={item.name}
									img={item.image}
									species={item.species}
									id={item.id}/>
							</Link>
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