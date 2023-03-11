import React from 'react';
import './myproject.css';
import Feature from '../../components/feature/Feature';
import rocket from "../../assets/rocket.png";
import blocdirect from "../../assets/blocdirect.png";
import codeboxx from "../../assets/codeboxx.png";


const MyProject = () => {
  return (
    <div className="code__myprojects section__margin" id="myproject">
      <div className="code__myprojects-feature">
      <Feature title="Full stack" text="I am passionate about information technology, and I would love to have the opportunity to take on new challenges" />
      </div>
      <div className="code__myprojects-heading">
        <h1 className="gradient__text">Projects I've done during my career</h1>
        <p>Explore my project</p>
      </div>
      <div className="code__myprojects-container">
      <img src={rocket} alt="rocket"/>
      <Feature title="Rocket Elevators" text="Website made to sell elevators while letting customers request a quote. It has been made using Ruby on Rails, RestAPI, NodeJS." />
      <img src={blocdirect} alt="blocdirect"/>
      <Feature title="Bloc Direct" text="Bloc Direct is a website made to buy/sell buildings and get an evaluation. It has been made using Ruby on Rails." />
      <img src={codeboxx} alt="codeboxx"/>
      <Feature title="Education" text="I've done a bootcamp with Codeboxx lasting four months where I've learned HTML, CSS/SASS, JavaScript, Node Express, React, Python, Panda, Ruby on Rails, Microsoft.Net, C Sharp, SQL" />
      </div>
    </div>
  )
}

export default MyProject