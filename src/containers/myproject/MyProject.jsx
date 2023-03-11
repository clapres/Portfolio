import React from 'react';
import './myproject.css';
/* import { Feature } from '../../components'; */
import Feature from '../../components/feature/Feature';

const MyProject = () => {
  return (
    <div className="code__myprojects section__margin" id="myproject">
      <div className="code__myprojects-feature">
      <Feature title="Full stack" text="I am passionate about information technology, and I would love to have the opportunity to take on new challenges" />
      </div>
      <div className="code__myprojects-heading">
        <h1 className="gradient__text">Project i did during my career</h1>
        <p>Explore my project</p>
      </div>
      <div className="code__myprojects-container">
      <Feature title="Rocket Elevators" text="It's a website made to sell elevator, get a quote it as been made using Ruby on Rails, RestAPI, Nodejs." />
      <Feature title="Bloc Direct" text="Bloc Direct is a web site made to sell building, buy building and get a evaluation it as been made using Ruby on Rails." />
      <Feature title="Education" text="I did a boot camp with Codeboxx four month i have learn HTML, CSS/SASS, JavaScript, Node Express, React, Python, Panda, Ruby on Rails, Microsoft.Net, C Sharp, SQL" />
      </div>
    </div>
  )
}

export default MyProject