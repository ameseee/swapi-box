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
  // const residentValues = Object.values(residents);
  //
  // const mappedResidents = residentValues.map((resident, i) => {
  //   return resident.name;
  // });
//console.log(model, passengers, vehicleName, vehicleClass);
//console.log('MAP IN MAP:', mappedResidents);

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
        {/* <h4 className="species">residents:{mappedResidents}</h4> */}
      </article>
    );
  } else if (selected === 'vehicles') {
    return (
      <article className='card'>
        <h4 className="planet-name">VehicleName:{vehicleName}</h4>
        <h4 className="homeworld">passengers:{passengers}</h4>
        <h4 className="population">vehicleClass:{vehicleClass}</h4>
        <h4 className="species">model:{model}</h4>
      </article>
    );
  } else {
    return <div>LOADING IN CARD</div>;
  }
};

Card.propTypes = {
  vehicleName: PropTypes.string,
  model: PropTypes.string,
  passengers: PropTypes.string,
  vehicleClass: PropTypes.string,
  personName: PropTypes.string,
  homeworld: PropTypes.string,
  population: PropTypes.string,
  species: PropTypes.string,
  planetName: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  selected: PropTypes.string
};

export default Card;
