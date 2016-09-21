import React from 'react';
import { Link } from 'react-router';

function HomePage() {
  return (
    <div>
      <div className="image-container home-page-image">
        <div className="home-page-container">
          <h3 className="page-sub-header">KENZAN</h3>
          <h1 className="page-header">MAKE NEXT <span className="emphasis">POSSIBLE.</span></h1>
          <p className="page-description">
            We've been delivering innovative solutions that support our clients,
            from ideation to deployment since 2004.
          </p>
          <button className="btn btn-primary waves-effect">Open Source</button>
          <button className="btn btn-primary waves-effect">Tech Radar</button>
        </div>
      </div>
      <div className="page-footer">
        <div className="arrow-link">
          <i className="arrow-icon material-icons orange md">ic_arrow_downward</i>
        </div>
        <h3 className="footer-text"> Explore. Contribute. Code</h3>
      </div>
    </div>
  );
}

export default HomePage;
