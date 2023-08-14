import React, { useState } from 'react';

const MobileDisplayedMenu = ({ closeIconClicked }) => {
  return (
    <section id='mobileNav'>
      <img id="closerIcon" src="images/close-mobile-menu-Icon.svg" alt='' onClick={closeIconClicked} />
      <a id="firstMenuElement" href="#portfolio" onClick={closeIconClicked} >Portfolio</a>
      <a id="secondMenuElement" href="#about-tittle" onClick={closeIconClicked} >About</a>
      <a id="thirdMenuElement" href="#contact-text" onClick={closeIconClicked} >Contact</a>
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
      {isMenuDisplayed && <MobileDisplayedMenu closeIconClicked={imageClicked} />}
    </nav>
  );
}
