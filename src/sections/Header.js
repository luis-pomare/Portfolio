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
        Hey there. I'm Luis Pomare
      </h1>
      <h2 className='h1-green' tabIndex='4'>
        I'm a software <br />
        developer
      </h2>
      <p className="text1" tabindex="5">
        I can help you build a product, feature or website. Look through some of my
        work and experience! If you like what you see and have a project you need
        to code, don't hesitate to contact me.
      </p>
      <section className='social' tabIndex='6'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/luis-pomare/'
        >
          <i className='fab fa-linkedin-in' />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://angel.co/u/luis-pomare'
        >
          <i className='fab fa-angellist' />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/luis-pomare'
        >
          <i className='fab fa-github' />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://twitter.com/LuisPomare1'
        >
          <i className='fab fa-twitter' />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://medium.com/@luispomare92'
        >
          <i className='fab fa-medium-m' />
        </a>
      </section>
      <a href='#social-2'>
        <img src='/images/Action.svg' alt='Action icon' className='baseImg' />
      </a>
    </header>
  );
}
