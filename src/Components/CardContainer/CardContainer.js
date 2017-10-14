import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

const CardContainer = ({ vehicles, planets, people, selected, toggleFavorited }) => {
  const planetValues = Object.values(planets);
  const vehicleValues = Object.values(vehicles);
  const peopleValues = Object.values(people);

  const itemValues = [...planetValues, ...vehicleValues, ...peopleValues];

  return itemValues.map(item => {
    return <Card
      key={item.url}
      selected={selected}
      toggleFavorited={toggleFavorited}
      {...item} />;
  });

};

CardContainer.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object
};

export default CardContainer;
