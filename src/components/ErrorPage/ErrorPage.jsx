import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <main className='error'>
      <section>
        <h2>Przykro nam, ale taka strona nie istnieje {':('}</h2>
        <span>Upewnij się, że podałeś dobry adres URL</span>
      </section>
    </main>
  );
};

export default ErrorPage;
