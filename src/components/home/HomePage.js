import React from 'react';
import { Link } from 'react-router';

function HomePage() {
  return (
    <div>
      <div className="image-container home-page-image">
        <div className="page-container">
          <h3 className="page-sub-header">KENZAN</h3>
          <h1 className="home-page-header">MAKE NEXT
            <span className="emphasis"> POSSIBLE.</span>
          </h1>
          <p className="home-page-description">
            We've been delivering innovative solutions that support our clients,
            from ideation to deployment since 2004.
          </p>
          <div className="button-container">
            <Link to="/explore/open-source" className="btn btn-primary">
              Open Source
            </Link>
            <Link to="/explore/tech-radar" className="btn btn-primary">
              Tech Radar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
