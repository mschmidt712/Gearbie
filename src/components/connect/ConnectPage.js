import React from 'react';
// import { Link } from 'react-router';

function TechRadarPage() {
  return (
    <div className="connect-page">
      <div className="connect-page-container">
        <div className="connect-contact-info col-2">
          <h1> Kenzan </h1>
          <div className="cities">
            <div className="col-2">
              <h3> NEW YORK CITY </h3>
              <h3> DENVER </h3>
            </div>
            <div className="col-2">
              <h3> PROVIDENCE </h3>
              <h3> LOS ANGELES </h3>
            </div>
          </div>
          <div className="contact-info-column">
            <div className="col-2">
              <div className="connect-email">
                <i className="material-icons">email</i>
                <a href="info@kenzan.com"> info@kenzan.com </a>
              </div>
            </div>
            <div className="col-2">
              <div className="connect-phone">
                <i className="material-icons">phone</i>
                <a href="212.239.1010"> 212.239.1010 </a>
              </div>
            </div>
          </div>
        </div>
        <div className="connect-content col-2 text-box-container">
          <div className="text-box">
            <h3 className="text-box-header">EVENTS</h3>
            <p className="text-box-content">An open source intiative by Kenzan with the objective of
              supporting developers with the tools they need for easily setting up
              and con guring a build system for a front-end project, by reducing
              boilerplate code and providing out-of-the-box functionality for the
              most common use cases.
            </p>
            <div className="arrow-forward-container">
              <a className="page-description-link material-icons" href="connect_with_kenzan">
                <h4 className="text-box-content page-description-link-text"> JOIN THE COMMUNITY </h4>
              </a>
            </div>
            <p className="text-box-content">An open source intiative by Kenzan with the objective of
              supporting developers with the tools they need for easily setting up
              and con guring a build system for a front-end project, by reducing
              boilerplate code and providing out-of-the-box functionality for the
              most common use cases.
            </p>
            <div className="arrow-forward-container">
              <a className="page-description-link material-icons" href="connect_with_kenzan">
                <h4 className="text-box-content page-description-link-text"> JOIN THE TEAM </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechRadarPage;
