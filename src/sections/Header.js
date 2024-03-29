import React from 'react';
import DesktopToolbar from '../components/DesktopToolbar';

export default function Header() {
  return (
    <header id='main-header'>
      <DesktopToolbar />
      <h1 className='h1-blue' tabIndex='3' id='hey-there'>
        Hey there. I'm Luis Pomare
      </h1>
      <h2 className='h1-green' tabIndex='4'>
        I'm a software <br />
        developer
      </h2>
      <p className="text1" tabIndex="5">
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
