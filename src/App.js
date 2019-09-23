import React from 'react';
import './App.css';
import Filters from './components/Filters'; 
import CharacterList from './components/CharacterList'; 
import CharacterCard from './components/CharacterCard'; 
import CharacterDetail from './components/CharacterDetail'; 
import {GetCharacters} from './services/GetCharacters'; 


// Estados. Array vacío (AllCharacters)
class App extends React.Component {
	constructor(props){
		super(props); 

		this.state = {
			AllCharacters : []
	}; 
}

// Función sirve para pintar la petición al entrar en la página
	componentDidMount() {
		this.getCartoons(); 
	}

// Función que contiene la segunda parte del fetch, donde se actualiza
// el estado (array). Es llamada en componentDidMount
	getCartoons() {
		GetCharacters()
			.then(data => {
				
				this.setState({
					AllCharacters : data.results
			}); 
		}); 
	}


	render() {
			const {AllCharacters} = this.state; 
		return (
			<div className="App">
				<Filters 
					AllCharacters={AllCharacters}/>
			</div>
		); 
	}; 
}


export default App;
