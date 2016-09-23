import React from 'react';
import { Link } from 'react-router';

function KenzanAboutPage() {
  return (
    <div>
      <div className="about-image-container kenzan-about-image">
        <h1 className="page-header about-page-header"> Kenzan </h1>
        <p className="about-page-description page-description"> Leadership,
          business analysis, architecture, development,
          project management and QA.
        </p>
        <div className="about-arrow-container arrow-container">
          <Link to="/about/learn">
            <i className="material-icons lg white shadow">keyboard_arrow_right</i>
          </Link>
        </div>
      </div>
      <div className="about-content-container">
        <div className="col-3">
          <h2 className="about-section-header">What we do.</h2>
          <p className="about-section-content">
            Excellence doesn’t happen by chance. It
            takes focus, collaboration and hard work.
            As a company, we’re committed to providing
            our clients with the best possible solutions
            from platform as a service, application
            development and cloud virtualization to
            consulting and education.
          </p>
          <div className="arrow-forward-button">
            <a className="content-link" href="connect_with_kenzan">
              <h4 className="about-section-sub-header"> CONNECT WITH KENZAN </h4>
              <i className="material-icons">arrow_forward</i>
            </a>
          </div>
        </div>
        <div className="col-3">
          <h2 className="about-section-header">Why .IO?</h2>
          <p>
            We created this space to highlight projects
            and technologies that we think other
            developers are interested in. By sharing
            our work and code, we hope that it will
            benefit those that seek to learn and
            understand the world of development.
          </p>
          <div className="arrow-forward-button">
            <a className="content-link" href="discover_kenzan">
              <h4 className="about-section-sub-header"> DISCOVER KENZAN </h4>
              <i className="material-icons">arrow_forward</i>
            </a>
          </div>
        </div>
        <div className="col-3">
          <h2 className="about-section-header">Who we are.</h2>
          <p>
            Excellence doesn’t happen by chance. It
            takes focus, collaboration and hard work.
            As a company, we’re committed to providing
            our clients with the best possible solutions
            from platform as a service, application
            development and cloud virtualization to
            consulting and education.
          </p>
          <div className="arrow-forward-button">
            <a className="content-link" href="discover_kenzan">
              <h4 className="about-section-sub-header"> WORK WITH KENZAN </h4>
              <i className="material-icons">arrow_forward</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KenzanAboutPage;
