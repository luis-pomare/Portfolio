import React from 'react';
import Card from '../components/Card';
import cardsData from '../components/cardsData';

export default function Main() {
  const { dataOne, dataTwo, dataThree, dataFour, dataFive, dataSix } = cardsData
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
        <Card cardData={dataOne} />
        <Card cardData={dataTwo} />
        <Card cardData={dataThree} />
        <Card cardData={dataFour} />
        <Card cardData={dataFive} />
        <Card cardData={dataSix} />
      </section>
    </main>
  );
}
