import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';


const Scroll = ({ scrollData }) => {
  console.log(scrollData);
  return (
    <div>
      <div className='crawl-container'>
        <div className='fade'>
          <h1 className='title'>SWAPI-BOX</h1>
        </div>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='crawl-text'>{scrollData[0]}</p>
            <p className='film-title'>title</p>
            <p className='release-date'>date</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Scroll.propTypes = {
//   scroll: PropTypes.object
// };

export default Scroll;
