import React from 'react';
import underConstructionVideo from '../assets/Under Construction.mp4';

const UnderConstruction = () => {
  return (
    <div>
      <video 
        src={underConstructionVideo} 
        autoPlay 
        loop 
        muted 
        className='absolute top-0 left-0 w-full h-full object-cover'
      />
    </div>
  );
};

export default UnderConstruction;
