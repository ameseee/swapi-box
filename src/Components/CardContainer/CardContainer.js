import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

const CardContainer = ({ vehicles }) => {
  const vehicleValues = Object.values(vehicles);
  console.log(vehicleValues);

  return vehicleValues.map(vehicle => {
    console.log(vehicle);
    return <Card
      key={vehicle.url}
      name={vehicle.name}
      model={vehicle.model}
      passengers={vehicle.passengers}
      vehicleClass={vehicle.vehicleClass} />
  });
  //console.log('vehicles: ', Object.values(vehicleValues[0]));


  // return <Card vehicles={vehicles} />

  // const peopleKeys = Object.keys(people)

  // return peopleKeys.map((person) => {
  //   console.log('SPECIES INSIDE MAP: ', people[person].species);
  //   return ( <Card
  //     name={people[person].name}
  //     key={people[person].name}
  //     species={people[person].species}/>
  //   )
  //
  // })

};


// CardContainer.propTypes = {
//   cleanedSwapi: PropTypes.array
// };

export default CardContainer;
