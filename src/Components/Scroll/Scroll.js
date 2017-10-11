import React from 'react';
import PropTypes from 'prop-types';
import { getRandomInt } from '../../Helpers/helper.js';
import '../../index.css';

const Scroll = ({ scrollData }) => {
  
  const [title, text, date] = scrollData[getRandomInt(0, 6)];

  return (
    <div>
      <div className='scroll'>
        <div className='fade'>
          <h1 className='title'>SWAPI-BOX</h1>
        </div>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='film-title'>{title}</p>
            <p className='crawl-text'>{text}</p>
            <p className='release-date'>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Scroll.propTypes = {
  scrollData: PropTypes.array.isRequired
};

export default Scroll;
