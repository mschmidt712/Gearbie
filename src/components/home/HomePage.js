import React from 'react';
import { Link } from 'react-router';
import Footer from '../shared/FooterComponent';

/**
 * The stateless component for the Home page.
 * Serves as an entry to the .IO page with a breif description of Kenzan and links to the explore section.
 */
function HomePage() {
  return (
    <div className="page">
      <div className="home-page-image" />
      <div className="page-container">
        <h2 className="page-sub-header">KENZAN</h2>
        <h1 className="home-page-header">MAKE NEXT
          <span className="emphasis"> POSSIBLE.</span>
        </h1>
        <p className="home-page-description">
          We've been delivering innovative solutions that support our clients,
          from ideation to deployment since 2004.
        </p>
        <div className="button-container">
          <Link to="/open-source" className="btn btn-primary">
            Open Source
          </Link>
          <Link to="/tech-radar" className="btn btn-primary">
            Tech Radar
          </Link>
        </div>
      </div>
      <Footer
        display="true"
        text="Explore. Contribute. Code."
        link="/open-source"
      />
    </div>
  );
}

export default HomePage;
