import React from 'react';

export default function Header() {
  return (
    <header id='main-header'>
      <section id='toolbar-desktop'>
        <a href='#portfolio' className='toolbar-text' tabIndex='1'>
          Portfolio
        </a>
        <a href='#about-tittle' className='toolbar-text' tabIndex='2'>
          About
        </a>
        <a href='#contact-me' className='toolbar-text' tabIndex='3'>
          Contact
        </a>
      </section>
      <h1 className='h1-blue' tabIndex='3'>
        Hey there. I'm
        <br />
        Luis Pomare
      </h1>
      <h2 className='h1-green' tabIndex='4'>
        I'm a software <br />
        developer
      </h2>
      <p className='text1' tabIndex='5'>
        I can help you build a product,
        <br />
        feature or website Look through
        <br />
        some of my work and experience!
        <br />
        If you like what you see and have
        <br />a project you need coded,
        <br />
        don't hestiate to contact me.
      </p>
      <section className='social' tabIndex='6'>
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
      <img src='/images/Action.svg' alt='Action icon' className='baseImg' />
    </header>
  );
}
