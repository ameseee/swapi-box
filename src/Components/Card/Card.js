import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const Card = ({ name }) => {
console.log(name);
  return (
    <article className='card'>
      { name }
    </article>
  );

};

// Card.propTypes = {
//
// };

export default Card;
