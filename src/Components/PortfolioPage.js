import React, { Component } from 'react';
import umigoLogo from '../images/umigo2.jpg';
import ghqLogo from '../images/ghq2.png';
import waitticketLogo from '../images/waitticket2.jpg';
import roomieLogo from '../images/roomie.jpg';

class PortfolioPage extends Component {
  render() {
    return(
      <div className="portfolio-container">
        <a name="portfolio"></a>

        <div className="portfolio-item">
          <img src={umigoLogo} className="umigo-logo" alt="Purple mountain logo" />
          <div className="project-info">
            <h3 className="project-title">Capstone: UmiGo</h3>
            <div className="project-links">
              <a href="https://github.com/lizzrobbins/umigo" target="_blank" rel="noopener noreferrer">github.com/lizzrobbins/umigo</a>
            </div>
            <p className="project-description">• A mobile social networking app that connects outdoor enthusiasts</p>
            <p className="project-technologies">Technologies used: React Native, Express, Node.js, Knex.js, PostgreSQL</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={ghqLogo} className="ghq-logo" alt="Circle with gHQ inside" />
          <div className="project-info">
            <h3 className="project-title">gHQ</h3>
            <div className="project-links">
              <a href="https://galvanize-hq.firebaseapp.com" target="_blank" rel="noopener noreferrer">galvanize-hq.firebaseapp.com</a> | <a href="https://github.com/Go-Getters-g64/g-hq" target="_blank" rel="noopener noreferrer">github.com/Go-Getters-g64/g-hq</a>
            </div>
            <p className="project-description">• A one stop shop portal for gStudents to find all the necessary resources to succeed</p>
            <p className="project-technologies">Technologies used: React, Express, Node.js, Knex.js, PostgreSQL, Bootstrap, hbs</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={waitticketLogo} className="waitticket-logo" alt="Wait Ticket logo and tagline" />
          <div className="project-info">
            <h3 className="project-title">waiTTicket</h3>
            <div className="project-links">
                <a href="http://waitticket.herokuapp.com" target="_blank" rel="noopener noreferrer">waitticket.herokuapp.com</a> | <a href="https://github.com/lizzrobbins/Wait-Ticket" target="_blank" rel="noopener noreferrer">github.com/lizzrobbins/Wait-Ticket</a>
            </div>
            <p className="project-description">•	Provides an easy and free way to obtain tickets to events at the last minute</p>
            <p className="project-description">
            •	Helps distribute event tickets that would otherwise go unused</p>
            <p className="project-technologies">Technologies used: HTML, CSS, JavaScript, Bootstrap, Handlebars, Node.js, Express, PostgreSQL, Google Maps API</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={roomieLogo} className="roomie-logo" alt="Screenshot of roommate expense calculator" />
          <div className="project-info">
            <h3 className="project-title">Roomie Owes How Much?</h3>
            <div className="project-links">
              <a href="https://erobbins1479.surge.sh" target="_blank" rel="noopener noreferrer">erobbins1479.surge.sh</a> | <a href="https://github.com/lizzrobbins/q1-project" target="_blank" rel="noopener noreferrer">github.com/lizzrobbins/q1-project</a>
            </div>
            <p className="project-description">•	A roommate bill calculator that allows for an easy and streamlined way to calculate the rent totals for multiple roommates</p>
            <p className="project-technologies">Technologies used: HTML, CSS, JavaScript, Bootstrap</p>
          </div>

        </div>
      </div>
    )
  }
}

export default PortfolioPage;
