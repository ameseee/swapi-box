import React from 'react';
import './Video.css';
import theVideo from '../../assets/stars.mp4'

const Video = () => {

  return (
    <div>
      <video poster={theVideo} className='background-video' playsInline autoPlay muted loop>
        <source src={theVideo} type='video/mp4'></source>
      </video>
    </div>
  );

};

// Button.propTypes = {
//
// };

export default Video;
