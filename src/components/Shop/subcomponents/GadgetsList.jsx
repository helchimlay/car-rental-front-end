import React from 'react';
import './GadgetsList.scss';

const GadgetsList = props => {
  const { gadgetsList } = props;
  return (
    <main className='gadgets-list'>
      <section className='list'>
        {gadgetsList &&
          gadgetsList.map(gadget => {
            return (
              <div className='gadget' key={gadget.id}>
                <div className='gadget-img'>
                  <img src={gadget.image.src} alt={gadget.image.alt} />
                </div>
                <div className='gadget-description'>
                  <p className='gadget-name'>{gadget.name}</p>
                  <p className='gadget-price'>{gadget.price} zł</p>
                  <button className='button'>Do koszyka</button>
                </div>
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default GadgetsList;
