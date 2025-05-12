
import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../../public/signature.png"


const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='navbar'>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/services"> My Services</a>
        <a href="/projects">Projects & Code</a>
      </div>
      <div className="call-btn">
        <a href="https://cal.com/ahmed-sherif-tg2x15" target='_blank'>Schedule A Call</a>
      </div>
    </div>

  )
}

export default Navbar