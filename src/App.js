import React, { Component } from 'react';
import logo from './black-logo.png';
import purpleLogo from './purple-logo.png';
import Nav from './Components/Nav.js';
import MainTitle from './Components/MainTitle.js';
import AboutSection from './Components/AboutSection.js';
import PortfolioPage from './Components/PortfolioPage.js';
import ContactMe from './Components/ContactMe.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: true,
      about: false,
      portfolio: false
    }
  }

  toggleMain = (e) => {
    e.preventDefault()
    if (this.state.main === false) {
      this.setState({main: true})
    }
    this.setState({
      about: false,
      portfolio: false
    })
  }

  toggleAbout = (e) => {
    e.preventDefault()
    if (this.state.about === false) {
      this.setState({about: true})
    }
    this.setState({
      main: false,
      portfolio: false
    })
  }

  togglePortfolio = (e) => {
    e.preventDefault()
    if (this.state.portfolio === false) {
      this.setState({portfolio: true})
    }
    this.setState({
      main: false,
      about: false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={purpleLogo} className="App-logo-purple" alt="purple logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <Nav
            toggleMain={this.toggleMain}
            toggleAbout={this.toggleAbout}
            togglePortfolio={this.togglePortfolio}/>
          <MainTitle />
        </header>
        <main>
          <AboutSection />
          <PortfolioPage />
          <ContactMe />
        </main>
      </div>
    );
  }
}

export default App;
