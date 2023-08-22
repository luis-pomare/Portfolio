import React from 'react'

export default function Card() {
  return (

    <article className='cards'>
      <section className='card-space'>
        <img alt='Math Magicians' src='/images/mathMagicians.png' />
      </section>
      <section className='card-info'>
        <h4 className='projectTitle' tabIndex='15'>
          Math magicians
        </h4>
        <section className='made-with'>
          <ul className='ul-with'>
            <li className='blue-li'>React</li>
            <li className='blue-li'>CSS</li>
            <li className='blue-li'>Calculator lib</li>
            <li className='blue-li'>JavaScript</li>
          </ul>
        </section>
        <section className='card-buttons-container'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://6303171c73d2452b1b1fa652--poetic-fairy-59c30f.netlify.app/'
          >
            <button
              id='fifthCardButton'
              type='button'
              className='green-button'
              tabIndex='16'
            >
              See Project
            </button>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/luis-pomare/math-magicians'
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
  )
}
