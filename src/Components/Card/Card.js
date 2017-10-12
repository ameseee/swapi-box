import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Card = ({ name, model, passengers, vehicleClass }) => {
//console.log('name on card: ', name);
  return (
    <article className='card'>
      <h4 className="vehicleProps name">{name}</h4>
      <h4 className="vehicleProps model">{model}</h4>
      <h4 className="vehicleProps passengers">{passengers}</h4>
      <h4 className="vehicleProps vehicleClass">{vehicleClass}</h4>
    </article>
  );

};

// Card.propTypes = {
//
// };

export default Card;
