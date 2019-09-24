import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const {SearchName, getNameInput} = props;
  return (
	<div className="app__filters">
		<input type="text" className="NameInput" placeHolder="Write a character's name"onChange={getNameInput} value={SearchName}/>
	</div>  
  );
};

Filters.propTypes = {
  SearchName: PropTypes.string, 
  getNameInput: PropTypes.func
  
};

export default Filters;

