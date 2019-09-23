import React from 'react';
import './App.css';
import Filters from './components/Filters'; 
import CharacterList from './components/CharacterList'; 
import CharacterCard from './components/CharacterCard'; 
import CharacterDetail from './components/CharacterDetail'; 
import {GetCharacters} from './services/GetCharacters'; 



class App extends React.Component {
	constructor(props){
		super(props); 
		this.state = {}; 
	}
	
	render() {
		return (
			<div className="App">Welcome to Evaluation</div>
		); 

	}; 

}

export default App;


