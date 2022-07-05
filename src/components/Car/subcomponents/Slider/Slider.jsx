import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = props => {
  return (
    <OwlCarousel className='owl-theme owl-carousel' items='1' loop nav>
      {props.images &&
        props.images.map((item, index) => (
          <div key={index} className='item'>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
    </OwlCarousel>
  );
};

export default Slider;
