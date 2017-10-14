import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import '../../index.css';

const ButtonContainer = ({ handleClick, toggleActive }) => {

  return (
    <div className='button-container'>
      <Button
        value={'vehicles'}
        handleClick={handleClick}
        toggleActive={toggleActive}/>
      <Button
        value={'people'}
        handleClick={handleClick}
        toggleActive={toggleActive} />
      <Button
        value={'planets'}
        handleClick={handleClick}
        toggleActive={toggleActive} />
      <Button
        value={'faves'}
        handleClick={handleClick}
        toggleActive={toggleActive}/>
    </div>
  );

};

ButtonContainer.propTypes = {
  handleClick: PropTypes.func,
  selected: PropTypes.string
};

export default ButtonContainer;
