import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Button = ({value, handleClick}) => {

  return (
    <button
      className='button'
      onClick={handleClick} >
      {value}
    </button>
  );

};

// Button.propTypes = {
//
// };

export default Button;
