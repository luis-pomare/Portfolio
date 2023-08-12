import React from 'react'

export default function DesktopToolbar() {
  return (
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
  )
}
