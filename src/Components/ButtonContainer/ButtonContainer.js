import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import '../../index.css';

const ButtonContainer = ({ handleClick }) => {

  const buttons = ['vehicles', 'people', 'planets'].map(value => {
    return (
      <Button
        key={`button-${value}`}
        value={value}
        handleClick={handleClick} />
    );
  });

  return (
    <div className='button-container'>
      {buttons}
    </div>
  );

};

ButtonContainer.propTypes = {
  handleClick: PropTypes.func
};

export default ButtonContainer;
