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
        <i className='fab fa-linkedin-in'></i>
        <i className='fab fa-angellist'></i>
        <i className='fab fa-github'></i>
        <i className='fab fa-twitter'></i>
        <i className='fab fa-medium-m'></i>
      </section>
      <img src='/images/Action.svg' alt='Action icon' className='baseImg' />
    </header>
  );
}
