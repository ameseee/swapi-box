import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../../index.css';

//in here we need to map over favorites and return cards from that

const CardContainer = ({ favorites, saveFavorites, selected, toggleFavorited, ...rest}) => {
  if (selected === 'faves') {
    console.log('selected: ', favorites);
  }
  const itemValues = rest[selected] || {};
  return Object.values(itemValues).map(item => {
    return <Card
      key={item.url}
      toggleFavorited={toggleFavorited}
      saveFavorites={saveFavorites}
      {...item} />;
  });

};

CardContainer.propTypes = {
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object,
  saveFavorites: PropTypes.func
};

export default CardContainer;
