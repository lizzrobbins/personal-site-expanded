import React, { Component } from 'react';
import umigoLogo from '../images/umigo.png';
import ghqLogo from '../images/ghq.png';
import waitticketLogo from '../images/waitticket.jpg';
import roomieLogo from '../images/roomie.jpg';

class PortfolioPage extends Component {
  render() {
    return(
      <div className="portfolio-container">
        <a name="portfolio"></a>

        <div className="portfolio-item">
          <img src={umigoLogo} className="portfolio-images" alt="UmiGo logo" />
          <div className="project-info">
            <h3 className="project-title">Capstone: UmiGo</h3>
            <div className="project-links">
              <a href="github.com/Go-Getters-g64/g-hq">github.com/lizzrobbins/umigo</a>
            </div>
            <p className="project-description">• A mobile social networking app that connects outdoor enthusiasts</p>
            <p className="project-technologies">Technologies used: React Native, Express, Node.js, Knex.js, PostgreSQL</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={ghqLogo} className="portfolio-images" alt="UmiGo logo" />
          <div className="project-info">          
            <h3 className="project-title">gHQ</h3>
            <div className="project-links">
              <a href="galvanize-hq.firebaseapp.com">galvanize-hq.firebaseapp.com</a> | <a href="github.com/Go-Getters-g64/g-hq">github.com/Go-Getters-g64/g-hq</a>
            </div>
            <p className="project-description">• A one stop shop portal for gStudents to find all the necessary resources to succeed</p>
            <p className="project-technologies">Technologies used: React, Express, Node.js, Knex.js, PostgreSQL, Bootstrap, hbs</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={waitticketLogo} className="portfolio-images" alt="UmiGo logo" />
          <div className="project-info">
            <h3 className="project-title">waiTTicket</h3>
            <div className="project-links">
                <a href="waitticket.herokuapp.com">waitticket.herokuapp.com</a> | <a href="github.com/lizzrobbins/Wait-Ticket">github.com/lizzrobbins/Wait-Ticket</a>
            </div>
            <p className="project-description">•	Provides an easy and free way to obtain tickets to events at the last minute</p>
            <p className="project-description">
            •	Helps distribute event tickets that would otherwise go unused</p>
            <p className="project-technologies">Technologies used: HTML, CSS, JavaScript, Bootstrap, Handlebars, Node.js, Express, PostgreSQL, Google Maps API</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img src={roomieLogo} className="portfolio-images" alt="UmiGo logo" />
          <div className="project-info">
            <h3 className="project-title">Roomie Owes How Much?</h3>
            <div className="project-links">
              <a href="erobbins1479.surge.sh">erobbins1479.surge.sh</a> | <a href="github.com/lizzrobbins/q1-project">github.com/lizzrobbins/q1-project</a>
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
