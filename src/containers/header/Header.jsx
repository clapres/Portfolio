import React from 'react';
import './header.css';
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="code__header section__padding" id="home">
      <div className="code__header-content">
        <h1 className="gradient__text">Creative Full Stack Developer based in Canada</h1>
        <p>I've been working for Codeboxx from September 2021 till now as a software developer. This job gave me the opportunity to aquire various skills such as programming, maintenance and the use of different computer languages. Working for this company has also helped me to develop better communication skills. Logical, efficient, autonomous and with good analytical thinking, I could be a great asset to your company.</p>
        <div className="code__header-content__input">
          <input type="email" placeholder="alexandre.lapres@gmail.com" />
          <button type="button">Contact me</button>
        </div>
      </div>
      <div className="code__header-image">
        <img src={ai} alt="ai"/>
      </div>
    </div>
  )
}

export default Header