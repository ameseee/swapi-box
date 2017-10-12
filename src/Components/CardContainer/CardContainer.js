import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

const CardContainer = ({ vehicles, planets }) => {
  const planetValues = Object.values(planets);
  const vehicleValues = Object.values(vehicles);

//   const planetMap = planetValues.map(planet => {
//     return <Card
//       key={planet.url}
//       population={planet.population}
//       name={planet.name}
//       climate={planet.climate}
//       terrain={planet.terrain}
//       residents={planet.residents} />
// });

  return vehicleValues.map(vehicle => {
    return <Card
      key={vehicle.url}
      name={vehicle.name}
      model={vehicle.model}
      passengers={vehicle.passengers}
      vehicleClass={vehicle.vehicleClass} />;
  });

};


// CardContainer.propTypes = {
//   cleanedSwapi: PropTypes.array
// };

export default CardContainer;
