import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

const CardContainer = ({people, planets, vehicles}) => {

  return (
    <div className='card-container'>
      Card Container
      <Card />
    </div>
  );

};

// CardContainer.propTypes = {
//
// };

export default CardContainer;
