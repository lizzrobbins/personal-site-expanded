import React, { Component } from 'react';
import Favicon from 'react-favicon';
import logo from './black-logo.png';
import purpleLogo from './purple-logo.png';
import Nav from './Components/Nav.js';
import MainTitle from './Components/MainTitle.js';
import AboutSection from './Components/AboutSection.js';
import PortfolioPage from './Components/PortfolioPage.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Favicon url={logo} />
        <header className="App-header">
          <img src={purpleLogo} className="App-logo-purple" alt="purple logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <Nav />
          <MainTitle />
        </header>
        <main>
          <AboutSection />
          <PortfolioPage />
        </main>
      </div>
    );
  }
}

export default App;
