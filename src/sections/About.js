import React from 'react';

export default function About() {
  return (
    <section class='about'>
      <header class='about-header'>
        <h3 class='h1-blue' id='about-tittle'>
          About me
        </h3>
        <p class='text2'>
          I can help you build a product,
          <br />
          feature or website Look through
          <br />
          some of my work and experience! If
          <br />
          you like what you see and have a<br />
          project you need coded,
          <br />
          don't hestiate to contact me.
        </p>
        <section id='resume-button'>
          <button type='button' class='green-button'>
            Get My Resume
          </button>
        </section>
      </header>
      <section id='skills'>
        <article class='skill-cards'>
          <img
            src='images/icon-languages.svg'
            alt='icon-languages'
            class='skill-img baseImg'
          />
          <h4>Languages</h4>
          <ul class='skill-ul'>
            <li class='skill-li'>JavaScript</li>
            <li class='skill-li'>Ruby</li>
            <li class='skill-li'>Html</li>
            <li class='skill-li'>CSS</li>
          </ul>
        </article>
        <article class='skill-cards'>
          <img
            src='images/icon-frameworks.svg'
            alt='icon-frameworks'
            class='skill-img baseImg'
          />
          <h4>Frameworks</h4>
          <ul class='skill-ul'>
            <li class='skill-li'>Bootstrap</li>
            <li class='skill-li'>Ruby on rails</li>
            <li class='skill-li'>RSpec</li>
            <li class='skill-li'>Capybara</li>
            <li class='skill-li'>Selenium</li>
          </ul>
        </article>
        <article class='skill-cards' id='skill-3'>
          <img
            src='images/icon-skills.svg'
            alt='icon-skills'
            class='skill-img baseImg'
          />
          <h4>Skills</h4>
          <ul class='skill-ul'>
            <li class='skill-li'>Codekit</li>
            <li class='skill-li'>GitHub</li>
            <li class='skill-li'>Codepen</li>
            <li class='skill-li'>Gitlab</li>
            <li class='skill-li'>Terminal</li>
          </ul>
        </article>
      </section>
    </section>
  );
}
