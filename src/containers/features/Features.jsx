import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Back-end & Front-end Development',
    text: 'Websites, Web & Mobile Applications, Application Programming Interfaces, Databases',
  },
  {
    title: 'Web Services',
    text: 'Amazon Web Services, Google Cloud, Microsoft Azure, Docker',
  },
  {
    title: 'Additional Knowledge',
    text: 'Git, Algorithms, Security Best Practices, Network and Internet Protocols, Artifical Inteligence and more',
  },
  {
    title: 'Languages & Frameworks',
    text: 'HTML, CSS/SASS (Bootstrap, Material UI, etc.), JavaScript, Node Express, React, React Native, Swift, Python, Ruby on Rails, Microsoft.Net, C Sharp, SQL',
  },
];

const Features = () => (
  <div className="code__features section__padding" id="Technologies">
    <div className="code__features-heading">
      <h1 className="gradient__text">Technologies I've been learning for the past few years</h1>
      <p>Two years of experience in Web Developement</p>
    </div>
    <div className="code__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;