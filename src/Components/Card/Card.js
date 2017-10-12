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
if (selected === 'people') {
  return (
    <article className='card'>
      <h4 className="person-name">NAME:{personName}</h4>
      <h4 className="homeworld">HW:{homeworld}</h4>
      <h4 className="population">POP:{population}</h4>
      <h4 className="species">SPECIES:{species}</h4>
    </article>
  );
} else if (selected === 'planets') {
  return (
    <article className='card'>
      <h4 className="planet-name">NAME:{planetName}</h4>
      <h4 className="homeworld">terrain:{terrain}</h4>
      <h4 className="population">climate:{climate}</h4>
      <h4 className="species">residents:{residents}</h4>
    </article>
  )
} else if (selected === 'vehicles') {
  return (
    <article className='card'>vehicleClass
      <h4 className="planet-name">Vehicle Name:{vehicleName}</h4>
      <h4 className="homeworld">passengers:{passengers}</h4>
      <h4 className="population">vehicleClass:{vehicleClass}</h4>
      <h4 className="species">model:{model}</h4>
    </article>
  );
} else {
  return <div>LOADING IN CARD</div>;
}
}
    //
    // <article className='card'>
    //   <h4 className="vehicleProps name">{vehicleName}</h4>
    //   <h4 className="vehicleProps model">{model}</h4>
    //   <h4 className="vehicleProps passengers">{passengers}</h4>
    //   <h4 className="vehicleProps vehicleClass">{vehicleClass}</h4>
    // </article>



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
