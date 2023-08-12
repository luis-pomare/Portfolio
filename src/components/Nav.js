import React from 'react';

export default function Nav() {
  const imageClicked = () => {
    console.log("The menu icon has been clicked")
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
    </nav>
  );
}
