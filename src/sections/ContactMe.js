import React from 'react';

export default function ContactMe() {
  return (
    <section id='contact-me'>
      <h3 className='h1-blue' id='contact-text'>
        I'm always <br />
        interested in <br />
        hearing about <br />
        new projects, so <br />
        if you'd like to <br />
        chat please get <br />
        in touch.
      </h3>
      <form action='https://formspree.io/f/mjvlgbyr' method='post'>
        <input
          name='Full_name'
          type='text'
          id='full_name'
          placeholder='Full name'
          maxLength='30'
          required
        />
        <input
          name='Email'
          type='email'
          id='email'
          placeholder='Email'
          required
        />
        <textarea
          name='Comment'
          id='comment'
          placeholder='Enter text here'
          maxLength='500'
          required
        ></textarea>
        <span id='errorMessage'></span>
        <button type='submit' id='submit'>
          Get in touch
        </button>
      </form>
    </section>
  );
}
