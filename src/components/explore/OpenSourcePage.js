import React from 'react';
// import { Link } from 'react-router';
import SimpleSlider from './OpenSourceCarousel';
import Footer from '../shared/FooterComponent';

function OpenSourcePage() {
  return (
    <div>
      <div className="open-source-image image-container" />
      <div className="explore-page-container">
        <div className="col-2">
          <h1 className="page-header"> Open Source </h1>
          <p className="page-description">
            Learn about Kenzan's contribution to the open source community.
          </p>
        </div>
        <div className="col-2 text-box-container carosel-container">
          <SimpleSlider />
        </div>
      </div>
      <Footer
        display="true"
        text="Explore. Contribute. Code."
        link="/explore/tech-radar"
      />
    </div>
  );
}

export default OpenSourcePage;
