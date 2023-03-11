import React from 'react'

import { Possibility, Features, MyProject, Header } from './containers';
import { Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <MyProject />
      <Features />
      <Possibility />
    </div>
  )
}

export default App
