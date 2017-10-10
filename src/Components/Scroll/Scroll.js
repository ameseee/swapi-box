import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';


const Scroll = () => {
  return (
    <div>
      <div className='crawl-container'>
        <div className='fade'>
          <h1 className='title'>SWAPI-BOX</h1>
          {/* <Button className=' button favorite'/> */}
        </div>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='crawl-text'>text</p>
            <p className='film-title'>filmTitle</p>
            <p className='release-date'>releaseDate</p>
          </div>
        </div>
      </div>
    </div>
  )
};

// Scroll.propTypes = {
//   scroll: PropTypes.object
// };

export default Scroll;
