import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Card = ({ name, species, vehicles }) => {
console.log(name);
  return (
    <article className='card'>
      { name }
      { species }
      { vehicles }
    </article>
  );

};

// Card.propTypes = {
//
// };

export default Card;
