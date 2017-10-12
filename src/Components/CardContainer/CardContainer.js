import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

const CardContainer = ({ vehicles, planets, people }) => {
  const planetValues = Object.values(planets);
  const vehicleValues = Object.values(vehicles);
  const peopleValues = Object.values(people);

  return peopleValues.map(person => {
    return <Card
      key={person.url}
      personName={person.name}
      homeworld={person.homeworld}
      population={person.population}
      species={person.species} />;
  });


//   const planetMap = planetValues.map(planet => {
//     return <Card
//       key={planet.url}
//       population={planet.population}
//       planetName={planet.name}
//       climate={planet.climate}
//       terrain={planet.terrain}
//       residents={planet.residents} />
// });

  // return vehicleValues.map(vehicle => {
  //   return <Card
  //     key={vehicle.url}
  //     vehicleName={vehicle.name}
  //     model={vehicle.model}
  //     passengers={vehicle.passengers}
  //     vehicleClass={vehicle.vehicleClass} />;
  // });

};


// CardContainer.propTypes = {
//   cleanedSwapi: PropTypes.array
// };

export default CardContainer;
