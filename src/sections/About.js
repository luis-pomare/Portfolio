import React from 'react';

export default function About() {
  return (
    <section className='about'>
      <header className='about-header'>
        <h3 className='h1-blue' id='about-tittle'>
          About me
        </h3>
        <p className='text2'>
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
          <a
            rel='author'
            href='https://drive.google.com/file/d/1Y8Ke44lL16ICw8_KfcOw5dCO9nasMpqt/view?usp=sharing'
            target='_blank'
          >
            <button type='button' className='green-button'>
              Get My Resume
            </button>
          </a>
        </section>
      </header>
      <section id='skills'>
        <article className='skill-cards'>
          <img
            src='/images/icon-languages.svg'
            alt='icon-languages'
            className='skill-img baseImg'
          />
          <h4>Languages</h4>
          <ul className='skill-ul'>
            <li className='skill-li'>JavaScript</li>
            <li className='skill-li'>Ruby</li>
            <li className='skill-li'>Html</li>
            <li className='skill-li'>CSS</li>
          </ul>
        </article>
        <article className='skill-cards'>
          <img
            src='/images/icon-frameworks.svg'
            alt='icon-frameworks'
            className='skill-img baseImg'
          />
          <h4>Frameworks</h4>
          <ul className='skill-ul'>
            <li className='skill-li'>Bootstrap</li>
            <li className='skill-li'>Ruby on rails</li>
            <li className='skill-li'>RSpec</li>
            <li className='skill-li'>Capybara</li>
            <li className='skill-li'>Selenium</li>
          </ul>
        </article>
        <article className='skill-cards' id='skill-3'>
          <img
            src='/images/icon-skills.svg'
            alt='icon-skills'
            className='skill-img baseImg'
          />
          <h4>Skills</h4>
          <ul className='skill-ul'>
            <li className='skill-li'>Codekit</li>
            <li className='skill-li'>GitHub</li>
            <li className='skill-li'>Codepen</li>
            <li className='skill-li'>Gitlab</li>
            <li className='skill-li'>Terminal</li>
          </ul>
        </article>
      </section>
    </section>
  );
}
