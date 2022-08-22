import React from 'react';

export default function Footer() {
  return (
    <footer>
      <section className='social' id='social-2'>
        <a target='_blank' href='https://www.linkedin.com/in/luis-pomare/'>
          <i className='fab fa-linkedin-in' />
        </a>
        <a target='_blank' href='https://angel.co/u/luis-pomare'>
          <i className='fab fa-angellist' />
        </a>
        <a target='_blank' href='https://github.com/luis-pomare'>
          <i className='fab fa-github' />
        </a>
        <a target='_blank' href='https://twitter.com/LuisPomare1'>
          <i className='fab fa-twitter' />
        </a>
        <a target='_blank' href='https://medium.com/@luispomare92'>
          <i className='fab fa-medium-m' />
        </a>
      </section>
      <p className='social' id='mail'>
        luispomare92@gmail.com
      </p>
    </footer>
  );
}
