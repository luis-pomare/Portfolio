import React, { useState } from 'react';

const MobileDisplayedMenu = () => {
  return (
    <section id='mobileNav'>
      <img id="closerIcon" src="images/close-mobile-menu-Icon.svg" alt='' />
      <a id="firstMenuElement" href="#portfolio">Portfolio</a>
      <a id="secondMenuElement" href="#about-tittle">About</a>
      <a id="thirdMenuElement" href="#contact-text">Contact</a>
    </section>
  )
}


export default function Nav() {
  let [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  const imageClicked = () => {
    setIsMenuDisplayed(!isMenuDisplayed)
  }

  return (
    <nav>
      <img
        className='menu'
        src='/images/menu.svg'
        alt='Navigation menu'
        id='menu-icon'
        onClick={imageClicked}
      />
      {isMenuDisplayed && <MobileDisplayedMenu />}
    </nav>
  );
}
