import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

const CardContainer = ({ people, planets, vehicles }) => {
//console.log('people in CC: ', people);
  console.log('vehicles: ', vehicles);

  return <Card vehicles={vehicles} />

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
//
// };

export default CardContainer;
