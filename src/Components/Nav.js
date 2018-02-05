import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <nav className="nav-container">
        <a onClick={this.props.toggleMain} className="nav-links">HOME</a>
        <a href="#about" className="nav-links">ABOUT</a>
        <a href="#portfolio" className="nav-links">PORTFOLIO</a>
        <a href="https://drive.google.com/file/d/1x5chLA0mDRFHjBzTJuTPsk0j4LKYmo0q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-links">RESUME</a>
      </nav>
    )
  }
}

export default Nav;
