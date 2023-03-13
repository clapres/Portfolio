import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#myproject">Projects</a></p>
  <p><a href="#Technologies">Technologies</a></p>
  <p><a href="#possibility">About</a></p>
  <p><a href="#contactme">Contact</a></p>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  return (
    <div className="code__navbar">
      <div className="code__navbar-links">
        <div className="code__navbar-links_container"> 
          <Menu />
        </div>
      </div>
      <div className="code__navbar-links_logo">
          <a href='https://www.linkedin.com/in/alexandre-langlois-lapres-400868218/'><img src={logo} alt="logo" /></a>
        </div>
      <div className="code__navbar-links_logo">
        <a href='https://github.com/Code-Alexandre'><img src={logo2} alt="logo2" /></a>
      </div>
      <div className="code__navbar-links_logo">
        <a href='https://www.facebook.com/alexandre.langloislapres/'><img src={logo3} alt="logo3" /></a>
      </div>
      <div className="code__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="code__navbar-menu_container scale-up-center">
            <div className="code__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar