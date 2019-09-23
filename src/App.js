import React from 'react';
import './App.css';
import Filters from './components/Filters'; 
import CharacterList from './components/CharacterList'; 
import {GetCharacters} from './services/GetCharacters';
// import CharacterCard from './components/CharacterCard'; 
// import CharacterDetail from './components/CharacterDetail';  


// Estados. Array vacío (AllCharacters)
class App extends React.Component {
	constructor(props){
		super(props); 

		this.state = {
			AllCharacters: [], 
			SearchName: ''
	}; 

	this.getNameInput = this.getNameInput.bind(this); 
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

	// método del dato que introduce el usuario para buscar por nombre 
	getNameInput(event) {
	const SearchName = event.currentTarget.value;  
	
		this.setState({
			SearchName: SearchName 
	}); 

}

	render() {
			const {AllCharacters, SearchName} = this.state; 
		return (
			<div className="App">
			<h1 className="Title">Rick and Morty</h1>
				<Filters 
					SearchName={SearchName}
					getNameInput={this.getNameInput}/>
				<CharacterList 
					AllCharacters={AllCharacters}
					SearchName={SearchName}/>
			</div>
		); 
	}; 
}




export default App;
