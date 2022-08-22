import React from 'react';

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
            <a
              target='_blank'
              rel='next'
              href='https://development--storied-crepe-b941b1.netlify.app/'
            >
              <button
                id='firstCardButton'
                type='button'
                className='green-button'
                tabIndex='8'
              >
                See Project
              </button>
            </a>
          </section>
        </article>
        <article className='cards'>
          <section className='card-space'>
            <img alt='gitHubFriends' src='/images/spaceTravelersHub.png' />
          </section>
          <section className='card-info'>
            <h4 className='projectTitle' tabIndex='9'>
              Space Travelers' Hub
            </h4>
            <section className='made-with'>
              <ul className='ul-with'>
                <li className='blue-li'>React and Redux</li>
                <li className='blue-li'>css</li>
                <li className='blue-li'>Microverse API</li>
              </ul>
            </section>
            <a
              target='_blank'
              rel='next'
              href='https://62e3d790301b6c0b660edd94--transcendent-creponne-c9416a.netlify.app/'
            >
              <button
                id='secondCardButton'
                type='button'
                className='green-button'
                tabIndex='10'
              >
                See Project
              </button>
            </a>
          </section>
        </article>
        <article className='cards'>
          <section className='card-space'></section>
          <section className='card-info'>
            <h4 className='projectTitle' tabIndex='11'>
              Multi-Post Stories Gain+Glory
            </h4>
            <section className='made-with'>
              <ul className='ul-with'>
                <li className='blue-li'>Ruby on rails</li>
                <li className='blue-li'>css</li>
                <li className='blue-li'>JavaScript</li>
                <li className='blue-li'>html</li>
              </ul>
            </section>
            <a target='_blank' rel='next' href=''>
              <button
                id='thirdCardButton'
                type='button'
                className='green-button'
                tabIndex='12'
              >
                See Project
              </button>
            </a>
          </section>
        </article>
        <article className='cards'>
          <section className='card-space'></section>
          <section className='card-info'>
            <h4 className='projectTitle' tabIndex='13'>
              Multi-Post Stories Gain+Glory
            </h4>
            <section className='made-with'>
              <ul className='ul-with'>
                <li className='blue-li'>Ruby on rails</li>
                <li className='blue-li'>css</li>
                <li className='blue-li'>JavaScript</li>
                <li className='blue-li'>html</li>
              </ul>
            </section>
            <a target='_blank' rel='next' href=''>
              <button
                id='fourthCardButton'
                type='button'
                className='green-button'
                tabIndex='14'
              >
                See Project
              </button>
            </a>
          </section>
        </article>
        <article className='cards'>
          <section className='card-space'></section>
          <section className='card-info'>
            <h4 className='projectTitle' tabIndex='15'>
              Multi-Post Stories Gain+Glory
            </h4>
            <section className='made-with'>
              <ul className='ul-with'>
                <li className='blue-li'>Ruby on rails</li>
                <li className='blue-li'>css</li>
                <li className='blue-li'>JavaScript</li>
                <li className='blue-li'>html</li>
              </ul>
            </section>
            <a target='_blank' rel='next' href=''>
              <button
                id='fifthCardButton'
                type='button'
                className='green-button'
                tabIndex='16'
              >
                See Project
              </button>
            </a>
          </section>
        </article>
        <article className='cards'>
          <section className='card-space'></section>
          <section className='card-info'>
            <h4 className='projectTitle' tabIndex='17'>
              Multi-Post Stories Gain+Glory
            </h4>
            <section className='made-with'>
              <ul className='ul-with'>
                <li className='blue-li'>Ruby on rails</li>
                <li className='blue-li'>css</li>
                <li className='blue-li'>JavaScript</li>
                <li className='blue-li'>html</li>
              </ul>
            </section>
            <a target='_blank' rel='next' href=''>
              <button
                id='sixthCardButton'
                type='button'
                className='green-button'
                tabIndex='18'
              >
                See Project
              </button>
            </a>
          </section>
        </article>
      </section>
    </main>
  );
}
