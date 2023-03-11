import React from 'react';
import alexandre from '../../assets/alexandre.png';
import './possibility.css';

const Possibility = () => (
  <div className="code__possibility section__padding" id="possibility">
    <div className="code__possibility-image">
      <img src={alexandre} alt="alexandre" />
    </div>
    <div className="code__possibility-content">
      <h4>Introduction</h4>
      <h1 className="gradient__text">Overview.</h1>
      <p>I'm a skilled software developer in TypeScript and JavaScript, and expertise in frameworks like React, Node.js and Ruby on Rails. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
      <h4>#Open to work</h4>
    </div>
  </div>
);

export default Possibility;