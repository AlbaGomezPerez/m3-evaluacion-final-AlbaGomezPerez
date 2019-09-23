import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const {SearchName, getNameInput} = props;
  return (
	<div className="app__filters">
		<p>Busca por nombre del personaje</p>
		<input type="text" className="NameInput" onChange={getNameInput} value={SearchName}/>
	</div>  
  );
};

Filters.propTypes = {
  SearchName: PropTypes.string, 
  getNameInput: PropTypes.func
  
};

// input y estructura de buscar 

export default Filters;

