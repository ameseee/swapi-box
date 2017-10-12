import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import '../../index.css';

const ButtonContainer = ({ handleClick }) => {

  return (
    <div className='button-container'>
      <Button
        value={'vehicles'}
        handleClick={handleClick} />
      <Button
        value={'people'}
        handleClick={handleClick} />
      <Button
        value={'planets'}
        handleClick={handleClick} />
      <Button
        value={'faves'} />
    </div>
  );

};

ButtonContainer.propTypes = {
  handleClick: PropTypes.func,
  selected: PropTypes.string
};

export default ButtonContainer;
