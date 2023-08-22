import React from 'react'

export default function Card(props) {
  const { cardData } = props
  return (
    <article className='cards'>
      <section className='card-space'>
        <img alt={cardData.cardName} src={cardData.cardImage} />
      </section>
      <section className='card-info'>
        <h4 className='projectTitle' tabIndex='15'>
          {cardData.cardName}
        </h4>
        <section className='made-with'>
          <ul className='ul-with'>
            {cardData.cardMadeWith.map((item, index) => (
              <li key={index} className='blue-li'>{item}</li>
            ))}
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
