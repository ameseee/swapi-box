import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Card = ({ vehicleName, model, passengers, vehicleClass, personName, homeworld, population, species, planetName, terrain, climate, residents }) => {

// console.log('model:', model,
//             'climate', climate,
//           'vehicleName', vehicleName, 'passengers', passengers, 'vehicleClass', vehicleClass, 'personName', personName, 'homeworld', homeworld, 'population', population, 'population', population, 'planetName', planetName, 'terrain', terrain, 'residents', residents );

          console.log(personName, species, homeworld, population);
return (
    <article className='card'>
      <h4 className="person-name">{personName}</h4>
      <h4 className="homeworld">{homeworld}</h4>
      <h4 className="population">{population}</h4>
      <h4 className="species">{species}</h4>
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
//
// };

export default Card;
