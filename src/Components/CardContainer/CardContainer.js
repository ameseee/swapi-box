import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

const CardContainer = ({ vehicles, planets, people, selected, toggleFavorited }) => {
  const planetValues = Object.values(planets);
  const vehicleValues = Object.values(vehicles);
  const peopleValues = Object.values(people);

  const itemValues = [...vehicleValues, ...planetValues, ...peopleValues];

  return itemValues.map(item => {
    return <Card
      key={item.url}
      selected={selected}
      personName={item.name}
      homeworld={item.homeworld}
      population={item.population}
      species={item.species}
      planetName={item.name}
      terrain={item.terrain}
      climate={item.climate}
      residents={item.residents}
      vehicleName={item.vehicleName}
      vehicleClass={item.vehicleClass}
      model={item.model}
      passengers={item.passengers}
      toggleFavorited={toggleFavorited}/>;
  });

};

CardContainer.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object
};

export default CardContainer;
