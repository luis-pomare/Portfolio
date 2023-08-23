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
        <article className='cards'>
          <section className='card-space'>
            <img alt='gitHubFriends' src='/images/gitHubFriends.png' />
          </section>
          <section className='card-info'>
            <h4 className='projectTitle' tabIndex='7'>
              GitHub Friends
            </h4>
            <section className='made-with'>
              <ul className='ul-with'>
                <li className='blue-li'>React and Redux</li>
                <li className='blue-li'>css</li>
                <li className='blue-li'>GitHub API</li>
              </ul>
            </section>
            <section className='card-buttons-container'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://development--storied-crepe-b941b1.netlify.app/'
              >
                <button
                  type='button'
                  className='green-button'
                  tabIndex='8'
                >
                  See Project
                </button>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/luis-pomare/github-friends'
              >
                <button
                  type='button'
                  className='green-button'
                  tabIndex='8'
                >
                  Source Code
                </button>
              </a>
            </section>
          </section>
        </article>
        <article className='cards'>
          <section className='card-space'>
            <img alt='Bookstore' src='/images/Bookstore.png' />
          </section>
          <section className='card-info'>
            <h4 className='projectTitle' tabIndex='13'>
              Bookstore
            </h4>
            <section className='made-with'>
              <ul className='ul-with'>
                <li className='blue-li'>React and Redux</li>
                <li className='blue-li'>css</li>
                <li className='blue-li'>Microverse API</li>
              </ul>
            </section>
            <section className='card-buttons-container'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://63031255330a6429601b98db--illustrious-sorbet-a4bf9d.netlify.app/'
              >
                <button
                  id='fourthCardButton'
                  type='button'
                  className='green-button'
                  tabIndex='14'
                >
                  See Project
                </button>
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/luis-pomare/bookstore'
              >
                <button
                  type='button'
                  className='green-button'
                  tabIndex='8'
                >
                  Source Code
                </button>
              </a>
            </section>
          </section>
        </article>
        <Card cardData={dataSix} />
      </section>
    </main>
  );
}
