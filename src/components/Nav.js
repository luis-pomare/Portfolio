import React, { useState } from 'react';

const MobileDisplayedMenu = () => {
  return (
    <div>MobileDisplayedMenu</div>
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
      {isMenuDisplayed ? <MobileDisplayedMenu /> : 'false'}
    </nav>
  );
}
