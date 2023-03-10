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
  <p><a href="#possibility">Technologies</a></p>
  <p><a href="#features">About</a></p>
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
          <img src={logo} alt="logo" />
        </div>
      <div className="code__navbar-links_logo">
        <img src={logo2} alt="logo2" />
      </div>
      <div className="code__navbar-links_logo">
        <img src={logo3} alt="logo3" />
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