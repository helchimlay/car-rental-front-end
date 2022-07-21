import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader-container'>
      <h2>Wczytywanie...</h2>
      <div className='spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
