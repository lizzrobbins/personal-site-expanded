import React, { Component } from 'react';

class PortfolioPage extends Component {
  render() {
    return(
      <div className="portfolio-container">
        <p className="portfolio-item">
          <h3 className="project-title">gHQ</h3>
          <p className="project-links"><a href="galvanize-hq.firebaseapp.com">galvanize-hq.firebaseapp.com</a> | <a href="github.com/Go-Getters-g64/g-hq">github.com/Go-Getters-g64/g-hq</a></p>

          <p className="project-description">• A one stop shop portal for gStudents to find all the necessary resources to succeed</p>

          <p className="project-technologies">Technologies used: React, Express, Node.js, Knex.js, PostgreSQL, Bootstrap, hbs</p>
        </p>
        <p className="portfolio-item">
          <h3 className="project-title">waiTTicket</h3>
          <p className="project-links"><a href="waitticket.herokuapp.com">waitticket.herokuapp.com</a> | <a href="github.com/lizzrobbins/Wait-Ticket">github.com/lizzrobbins/Wait-Ticket</a></p>

          <p className="project-description">•	Provides an easy and free way to obtain tickets to events at the last minute</p>
          <p className="project-description">
          •	Helps distribute event tickets that would otherwise go unused</p>

          <p className="project-technologies">Technologies used: HTML, CSS, JavaScript, Bootstrap, Handlebars, Node.js, Express, PostgreSQL, Google Maps API</p>
        </p>
        <p className="portfolio-item">
          <h3 className="project-title">Roomie Owes How Much?</h3>
          <p className="project-links"><a href="erobbins1479.surge.sh">erobbins1479.surge.sh</a> | <a href="github.com/lizzrobbins/q1-project">github.com/lizzrobbins/q1-project</a></p>

          <p className="project-description">•	A roommate bill calculator that allows for an easy and streamlined way to calculate the rent totals for multiple roommates</p>

          <p className="project-technologies">Technologies used: HTML, CSS, JavaScript, Bootstrap</p>
        </p>
      </div>
    )
  }
}

export default PortfolioPage;
