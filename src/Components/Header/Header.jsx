import React from 'react'
import './Header.style.css'
import Navbar from '../Navbar/Navbar'
import Social from '../Social/Social'
const Header = () => {
  return (
    <header className='header-content'>
        <Navbar/>
        <div className='header-container'>
        <img className='header-content__photo' src="/assets/logo-header.png" alt="" />
        <div className='header-info d-flex f-column j-content'>
            <h1 className=''>Francisco Yañez</h1>
            <h2 className='animate__lightSpeedInRight animate__slower'>Front end Developer</h2>
        <Social/>
        </div>
        </div>
        
    </header>
  )
}


export default Header

