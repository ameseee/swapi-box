import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './button-container-styles.css';

const ButtonContainer = () => {


  return (
    <div className='button-container'>
      <Button />
      <Button />
      <Button />
    </div>
  );

};

// ButtonContainer.propTypes = {
//
// };

export default ButtonContainer;
