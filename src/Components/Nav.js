import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <nav className="nav-container">
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
      </nav>
    )
  }
}

export default Nav;
