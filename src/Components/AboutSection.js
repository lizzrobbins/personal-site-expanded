import React, { Component } from 'react';
import Nav from './Nav.js';
import myPhoto from '../images/lizz-robbins-chillin-sunset.jpg';

class AboutSection extends Component {
  render() {
    return(
      <div className='navAndAbout'>

        <Nav navStick={this.props.navStick} />


        <div className="about-container">
          <img src={myPhoto} className="my-background-photo" alt="Me lounging casually on stairs outside" />
          <div className="about-info">
            <a name="about"></a>
            <p className="about-title">About Me</p>
            <p className="about-content">
              As a future-oriented full stack developer, I bring years of experience guiding clients and customers through an ever-changing technological landscape.
            </p>
            <p className="about-content">
              I love to explore new challenges, taking them apart and examining every minute detail. This desire allows me to quickly puzzle through and trouble shoot problems that others might not see.
            </p>
            <p className="about-content">
              This industry is the wave of the future, ever-growing, ever changing, and I am thrilled to be in the middle of it.
            </p>
          </div>
          {/* <img src={myPhoto} className="my-photo" alt="Me lounging casually on stairs outside" /> */}
        </div>
      </div>
    )
  }
}

export default AboutSection;
