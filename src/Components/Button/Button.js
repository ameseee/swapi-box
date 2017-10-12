import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Button = ({value, handleClick, handleClickPeople}) => {
  //  console.log('handleclick in button:', handleClickPeople);

  return (
    <button
      value={`${value}`}
      onClick={handleClickPeople} >
      {value}
    </button>
  );

};

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;
