import React, { Component } from 'react';
import emailIcon from '../images/email-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';

class MainTitle extends Component {
  render() {
    return(
        <div className="main-intro">
          <p className="my-name">
            Lizz Robbins
          </p>
          <p className="my-handle">
            Full Stack Developer | UX Enthusiast
          </p>
          <div className="contact-icons">
            <div className="contact-container">
              <a href="mailto:me@lizzrobbins.com" target="_blank" rel="noopener noreferrer"><img src={emailIcon} className="email-icon" alt="email icon" /></a>
              <a href="https://www.linkedin.com/in/lizzrobbins/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} className="linkedin-icon" alt="LinkedIn icon" /></a>
              <a href="https://github.com/lizzrobbins" target="_blank" rel="noopener noreferrer"><img src={githubIcon} className="github-icon" alt="GitHub icon" /></a>
            </div>
          </div>
        </div>
    )
  }
}

export default MainTitle;
