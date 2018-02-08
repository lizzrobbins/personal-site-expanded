import React, { Component } from 'react';
import Favicon from 'react-favicon';
import logo from './images/black-logo.png';
import purpleLogo from './images/purple-logo.png';
import MainTitle from './Components/MainTitle.js';
import AboutSection from './Components/AboutSection.js';
import PortfolioPage from './Components/PortfolioPage.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navStick: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }


  handleScroll() {
    let Y = window.innerHeight
    console.log('scroll', window.scrollY);
    console.log('height', Y);
    if (window.scrollY > Y) {
      this.setState({navStick: true})
    } else if (window.scrollY < Y) {
      this.setState({navStick: false})
    }
  }

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll)
}

  render() {
    return (
      <div className="App">
        <Favicon url={logo} />
        <header className="App-header">
          {/* <img src={purpleLogo} className="App-logo-purple" alt="purple logo" />
          <img src={logo} className="App-logo" alt="logo" /> */}
          <MainTitle />
        </header>
        <main>
          <AboutSection
            navStick={this.state.navStick}/>
          <PortfolioPage />
        </main>
      </div>
    );
  }
}

export default App;
