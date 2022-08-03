import React, { useState, useEffect } from 'react';
import { getGadgets } from '../../services/shop/gadgetsListRequests';
import GadgetsList from './subcomponents/GadgetsList/GadgetsList';
import { Helmet } from 'react-helmet';
import Loader from '../Loader/Loader';

const Shop = () => {
  const [gadgets, setGadgets] = useState(null);

  useEffect(() => {
    getGadgets().then(response => {
      setGadgets(response);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Sklep | CarRental</title>
        <meta
          name='description'
          content='Sklep z gadżetami, w którym zakupisz przedmioty umilające jazdę twoim pojazdem!'
        />
      </Helmet>
      {gadgets ? <GadgetsList gadgetsList={gadgets} /> : <Loader />}
    </>
  );
};

export default Shop;
