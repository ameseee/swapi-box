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
  selected,
  toggleFavorited
}) => {

  if (selected === 'people') {
    return (
      <article className='card'>
        <div onClick={toggleFavorited}>fave</div>
        <h3 className="person">Character</h3>
        <h4 className="person-name">NAME: {personName}</h4>
        <h4 className="homeworld">HOMEWORLD: {homeworld}</h4>
        <h4 className="population">POP: {population}</h4>
        <h4 className="species">SPECIES: {species}</h4>
        <span className="card-background"></span>
      </article>
    );
  } else if (selected === 'planets') {
    return (
      <article className='card'>
        <div onClick={toggleFavorited}>fave</div>
        <h3 className="planet">Planet</h3>
        <h4 className="planet-name">NAME: {planetName}</h4>
        <h4 className="homeworld">TERRAIN: {terrain}</h4>
        <h4 className="population">CLIMATE: {climate}</h4>
        <span className="card-background"></span>

      </article>
    );
  } else if (selected === 'vehicles') {
    return (
      <article className='card'>
        <div onClick={toggleFavorited}>fave</div>
        <h3 className="vehicle">Vehicle</h3>
        <h4 className="planet-name">VEHICLE: {vehicleName}</h4>
        <h4 className="homeworld">PASSENGERS: {passengers}</h4>
        <h4 className="population">CLASS: {vehicleClass}</h4>
        <h4 className="species">MODEL: {model}</h4>
        <span className="card-background"></span>
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
  selected: PropTypes.string,
  toggleFavorited: PropTypes.func
};

export default Card;
