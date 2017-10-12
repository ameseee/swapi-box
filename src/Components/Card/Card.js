import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Card = ({
  vehicleName,
  model,
  passengers,
  vehicleClass,
  personName,
  homeworld,
  population,
  species,
  planetName,
  terrain,
  climate,
  residents,
  selected
}) => {
console.log('selected in CARD', selected);
//console.log(homeworld, population);
//console.log(vehicleName, vehicleClass, passengers, model);
if(selected = )
  return (
    <article className='card'>
      <h4 className="person-name">NAME:{personName}</h4>
      <h4 className="homeworld">HW:{homeworld}</h4>
      <h4 className="population">POP:{population}</h4>
      <h4 className="species">SPECIES:{species}</h4>
    </article>
    //
    // <article className='card'>
    //   <h4 className="vehicleProps name">{vehicleName}</h4>
    //   <h4 className="vehicleProps model">{model}</h4>
    //   <h4 className="vehicleProps passengers">{passengers}</h4>
    //   <h4 className="vehicleProps vehicleClass">{vehicleClass}</h4>
    // </article>
  );

};

// Card.propTypes = {
//vehicleName,
// model: PropTypes.,
// passengers: PropTypes.,
// vehicleClass: PropTypes.,
// personName: PropTypes.,
// homeworld: PropTypes.,
// population,
// species,
// planetName,
// terrain,
// climate,
// residents
// };

export default Card;
