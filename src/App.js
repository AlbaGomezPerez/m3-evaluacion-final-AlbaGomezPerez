import React from 'react';
import './App.scss';
import {GetCharacters} from './services/GetCharacters';
import Home from './components/Home'; 
import CharacterDetail from './components/CharacterDetail';
import { Route, Switch } from 'react-router-dom';

// import CharacterCard from './components/CharacterCard'; 
// import CharacterDetail from './components/CharacterDetail';  


// Estados. Array vacío (AllCharacters)
class App extends React.Component {
	constructor(props){
		super(props); 

		this.state = {
			AllCharacters: [], 
			SearchName: ''
			// otro buscador ''
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
				<header>
					<h1 className="Title">Rick and Morty</h1>
				</header>
				<main>
					<Switch>
						<Route
							exact
							path="/"
							render={routerProps => (
								<Home 
									AllCharacters={AllCharacters}
									SearchName={SearchName}
									getNameInput={this.getNameInput}
								/>
							)}
						/>
						<Route
							path="/character/:id"
							render={routerProps => (
								<CharacterDetail 
									Match={routerProps.match}
									AllCharacters={AllCharacters}
								/>
							)}
						/>
					</Switch>
				</main>
			</div>
		); 
	}; 
}
export default App;
