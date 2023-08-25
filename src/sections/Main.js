import React from 'react';
import Card from '../components/Card';
import cardsData from '../components/cardsData';

export default function Main() {
  return (
    <main className='works-container'>
      <header className='works-header'>
        <h3 className='h1-blue' tabIndex='6' id='portfolio'>
          My Recent
          <br />
          Works
        </h3>
        <img
          src='/images/Indicator.svg'
          alt='Works title Indicator'
          className='baseImg'
        />
      </header>
      <section className='cards-container'>
        {Object.values(cardsData).map(
          (data, index) => (<Card cardData={data} key={index} />)
        )}
      </section>
    </main>
  );
}
