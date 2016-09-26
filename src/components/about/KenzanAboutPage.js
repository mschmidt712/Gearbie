import React from 'react';
// import { Link } from 'react-router';
import Footer from '../shared/FooterComponent';

function KenzanAboutPage() {
  return (
    <div className="about-page">
      <div className="about-image-container kenzan-about-image">
        <h1 className="page-header"> Kenzan </h1>
        <p className="page-description"> Leadership,
          business analysis, architecture, development,
          project management and QA.
        </p>
      </div>
      <div className="about-content-container">
        <div className="col-3 text-box">
          <h2 className="text-box-header">What we do.</h2>
          <p className="text-box-content">
            Excellence doesn’t happen by chance. It
            takes focus, collaboration and hard work.
            As a company, we’re committed to providing
            our clients with the best possible solutions
            from platform as a service, application
            development and cloud virtualization to
            consulting and education.
          </p>
          <div className="arrow-forward-container">
            <a className="page-description-link material-icons" href="connect_with_kenzan">
              <h4 className="page-description-link-text"> CONNECT WITH KENZAN </h4>
            </a>
          </div>
        </div>
        <div className="col-3 text-box">
          <h2 className="text-box-header">Why .IO?</h2>
          <p className="text-box-content">
            We created this space to highlight projects
            and technologies that we think other
            developers are interested in. By sharing
            our work and code, we hope that it will
            benefit those that seek to learn and
            understand the world of development.
          </p>
          <div className="arrow-forward-container">
            <a className="page-description-link material-icons" href="discover_kenzan">
              <h4 className="page-description-link-text"> DISCOVER KENZAN </h4>
            </a>
          </div>
        </div>
        <div className="col-3 text-box">
          <h2 className="text-box-header">Who we are.</h2>
          <p className="text-box-content">
            Excellence doesn’t happen by chance. It
            takes focus, collaboration and hard work.
            As a company, we’re committed to providing
            our clients with the best possible solutions
            from platform as a service, application
            development and cloud virtualization to
            consulting and education.
          </p>
          <div className="arrow-forward-container">
            <a className="page-description-link material-icons" href="discover_kenzan">
              <h4 className="page-description-link-text"> WORK WITH KENZAN </h4>
            </a>
          </div>
        </div>
      </div>
      <Footer
        display="true"
        text="Connect with Us."
        link="/connect"
      />
    </div>
  );
}

export default KenzanAboutPage;
