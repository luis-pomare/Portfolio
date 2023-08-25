import React from 'react'

export default function Card(props) {
  const { cardData, key } = props
  return (
    <article className='cards'>
      <section className='card-space'>
        <img alt={cardData.cardName} src={cardData.cardImage} />
      </section>
      <section className='card-info'>
        <h4 className='projectTitle' tabIndex={key + 8}>
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
            href={cardData.cardProjectLink}
          >
            <button
              id='fifthCardButton'
              type='button'
              className='green-button'
              tabIndex={key + 9}
            >
              See Project
            </button>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={cardData.cardSourceLink}
          >
            <button
              type='button'
              className='green-button'
              tabIndex={key + 10}
            >
              Source Code
            </button>
          </a>
        </section>
      </section>
    </article>
  )
}
