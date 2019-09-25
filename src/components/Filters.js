import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const {SearchName, getNameInput, getGender} = props;
  return (
	<div className="app__filters">
		<input type="text" className="NameInput" placeholder="Write a character's name" onChange={getNameInput} value={SearchName}/>
		<select name="" id="" onChange={getGender}>
			<option value="All">All</option>
			<option value="Male">Male</option>
			<option value="Female">Female</option>
			<option value="unknown">unknown</option>
		</select>
	</div>  

  );
};

Filters.propTypes = {
  SearchName: PropTypes.string, 
  getNameInput: PropTypes.func, 
  getGender: PropTypes.func
  
};

export default Filters;

