import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Button = ({value, handleClick }) => {

  return (
    <button
      value={value}
      onClick={handleClick}
      className="item-button" >
      {value}
    </button>
  );

};

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;
