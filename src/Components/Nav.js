import React, { Component } from 'react';
import emailIcon from '../images/email-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';

class Nav extends Component {
  render() {
    return(
      <nav className="nav-container" style={{visibility: this.props.navStick ? 'visible' : 'hidden',
      position: this.props.navStick ? 'fixed' : null}}>
        <div className="outer-nav-links">
          <a onClick={this.props.toggleMain} className="nav-links">HOME</a>
        </div>
        <div className="outer-nav-links">
          <a href="#about" className="nav-links">ABOUT</a>
        </div>
        <div className="outer-nav-links">
          <a href="#portfolio" className="nav-links">PORTFOLIO</a>
        </div>
        <div className="outer-nav-links">
          <a href="https://drive.google.com/file/d/1x5chLA0mDRFHjBzTJuTPsk0j4LKYmo0q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-links">RESUME</a>
        </div>
        
        <div className="contact-icons">
          <div className="contact-container">
            <a href="mailto:me@lizzrobbins.com" target="_blank" rel="noopener noreferrer"><img src={emailIcon} className="email-icon" alt="email icon" /></a>
            <a href="https://www.linkedin.com/in/lizzrobbins/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} className="linkedin-icon" alt="LinkedIn icon" /></a>
            <a href="https://github.com/lizzrobbins" target="_blank" rel="noopener noreferrer"><img src={githubIcon} className="github-icon" alt="GitHub icon" /></a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
