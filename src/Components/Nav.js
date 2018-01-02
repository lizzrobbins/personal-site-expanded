import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <nav className="nav-container">
        <a onClick={this.props.toggleMain} className="nav-links">HOME</a>
        <a onClick={this.props.toggleAbout} className="nav-links">ABOUT</a>
        <a onClick={this.props.togglePortfolio} className="nav-links">PORTFOLIO</a>
        <a className="nav-links">RESUME</a>
      </nav>
    )
  }
}

export default Nav;
