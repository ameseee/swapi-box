import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import '../../index.css';

const ButtonContainer = ({handleClick}) => {

  return (
    <div className='button-container'>
      <Button
        value={'VEHICLES'}
        handleClick={handleClick} />
      <Button
        value={'PEOPLE'}
        handleClick={handleClick} />
      <Button value={'PLANETS'}
        handleClick={handleClick} />
      <Button value={'FAVES'}
        handleClick={handleClick} />
    </div>
  );

};

// ButtonContainer.propTypes = {
//
// };

export default ButtonContainer;
