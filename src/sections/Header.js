import React from 'react';

export default function Header() {
  return (
    <header id='main-header'>
      <section id='toolbar-desktop'>
        <a href='#portfolio' class='toolbar-text' tabindex='1'>
          Portfolio
        </a>
        <a href='#about-tittle' class='toolbar-text' tabindex='2'>
          About
        </a>
        <a href='#contact-me' class='toolbar-text' tabindex='3'>
          Contact
        </a>
      </section>
      <h1 class='h1-blue' tabindex='3'>
        Hey there. I'm
        <br />
        Luis Pomare
      </h1>
      <h2 class='h1-green' tabindex='4'>
        I'm a software <br />
        developer
      </h2>
      <p class='text1' tabindex='5'>
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
      <section class='social' tabindex='6'>
        <i class='fab fa-twitter'></i>
        <i class='fab fa-linkedin-in'></i>
        <i class='fab fa-medium-m'></i>
        <i class='fab fa-github'></i>
        <i class='fab fa-angellist'></i>
      </section>
      <img src='images/Action.svg' alt='Action icon' class='baseImg' />
    </header>
  );
}
