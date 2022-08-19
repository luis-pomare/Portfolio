import React from 'react';
import About from './sections/About';
import ContactMe from './sections/ContactMe';
import Header from './sections/Header';
import Main from './sections/Main';
import Toolbar from './sections/Toolbar';
import Footer from './sections/Footer';
import './styles/style.css';

function App() {
  return (
    <div className='App'>
      <Toolbar />
      <Header />
      <Main />
      <About />
      <ContactMe />
      <Footer />
      <section id='popupContainer1' className='invisible'>
        <article id='popupContainer2'>
          <span id='popupImageContainer' className='popupGrid'>
            <img id='popupCloser' src='images/popupCloserIcon.svg' alt='' />
            <img
              src='images/About-back-1.svg'
              id='projectImage'
              alt='Project image'
            />
          </span>
          <h4 id='popupTittle'></h4>
          <ul id='technologiesList' className='ul-with popupGrid orderedGrid'>
            <li id='firstTechnology' className='blue-li'></li>
            <li id='secondTechnology' className='blue-li'></li>
            <li id='thirdTechnology' className='blue-li'></li>
          </ul>
          <p id='popupParagraph' className='text2 popupGrid orderedGrid'></p>
          <span id='cardButtonContainer'>
            <a
              id='firstButton'
              className='green-button'
              href='google.com'
              target='_blank'
            >
              Live version
              <img
                id='popupCardButtonIcon1'
                src='images/popupCardButtonIcon1.svg'
                alt=''
              />
            </a>
            <a
              id='secondButton'
              className='green-button'
              href='google.com'
              target='_blank'
            >
              Source code
              <img
                id='popupCardButtonIcon2'
                src='images/popupCardButtonIcon2.svg'
                alt=''
              />
            </a>
          </span>
        </article>
      </section>
      <script src='dynamics.js'></script>
    </div>
  );
}

export default App;

