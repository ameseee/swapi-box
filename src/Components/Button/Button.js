import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Button = ({value, handleClick}) => {
  //  console.log('handleclick in button:', handleClickPeople);

  return (
    <button
      value={`${value}`}
      onClick={handleClick} >
      {value}
    </button>
  );

};

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;
