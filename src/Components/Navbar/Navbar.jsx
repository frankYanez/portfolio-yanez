import React from 'react'
import './Navbar.style.css'

const Navbar = () => {
  return (
    <div className='contain-nav '>
      <img className='logo' src="/assets/logo-black.png" alt="" />
      <nav className='navbar'>
        <a href='#about-me' className='link-section'>About Me</a>
        <a href='#projects' className='link-section'>Projects</a>
        <a href='#contact' className='link-section'>Contact</a>
     
    </nav>
    </div>
    
  )
}

export default Navbar