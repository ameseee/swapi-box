import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import '../../index.css';

const ButtonContainer = ({handleClickPeople, handleClick, selected}) => {

  // function handleClickPeople() {
  //   handleClickPeople();
  // };

  return (
    <div className='button-container'>
      <Button
        value={'vehicles'}
        handleClick={handleClick} />
      <Button
        value={'people'}
        handleClickPeople={handleClickPeople} />
      <Button
        value={'planets'}
        handleClick={handleClick} />
      <Button
        value={'faves'}
        handleClick={handleClick} />
    </div>
  );

};

ButtonContainer.propTypes = {
  handleClick: PropTypes.func,
  selected: PropTypes.string,
  handleClickPeople: PropTypes.func
};

export default ButtonContainer;
