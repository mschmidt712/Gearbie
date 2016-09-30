import React from 'react';
// import { Link } from 'react-router';
import ExploreCarousel from './ExploreCarousel';
import Footer from '../shared/FooterComponent';

function TechRadarPage() {
  const data = [{
    header: 'SPRING CLOUD',
    text: 'An open source intiative by Kenzan with the objective of supporting developers with the tools they need for easily setting up and con guring a build system for a front-end project, by reducing boilerplate code and providing out-of-the-box functionality for the most common use cases. Ut occulleni tempore est lat dolent lacerchil ilit quia si ut fugitat. Oris endignihic tem reproruptur? Itam hario ex eum qui quia doles sanim re nobit int doluptus dererumquas cum exerum. Orro blam fugit entiasp edignatendit et peris sum ilitatur aut et autem fuga. Name endios re eaque oditiasperit viducimi, sint qui quid magnatur, quo maio. Upta que modit ulluptisque est el ius sunti omnis molo mod el',
  }, {
    header: 'SPRING CLOUD',
    text: 'An open source intiative by Kenzan with the objective of supporting developers with the tools they need for easily setting up and con guring a build system for a front-end project, by reducing boilerplate code and providing out-of-the-box functionality for the most common use cases. Ut occulleni tempore est lat dolent lacerchil ilit quia si ut fugitat. Oris endignihic tem reproruptur? Itam hario ex eum qui quia doles sanim re nobit int doluptus dererumquas cum exerum. Orro blam fugit entiasp edignatendit et peris sum ilitatur aut et autem fuga. Name endios re eaque oditiasperit viducimi, sint qui quid magnatur, quo maio. Upta que modit ulluptisque est el ius sunti omnis molo mod el',
  }, {
    header: 'SPRING CLOUD',
    text: 'An open source intiative by Kenzan with the objective of supporting developers with the tools they need for easily setting up and con guring a build system for a front-end project, by reducing boilerplate code and providing out-of-the-box functionality for the most common use cases. Ut occulleni tempore est lat dolent lacerchil ilit quia si ut fugitat. Oris endignihic tem reproruptur? Itam hario ex eum qui quia doles sanim re nobit int doluptus dererumquas cum exerum. Orro blam fugit entiasp edignatendit et peris sum ilitatur aut et autem fuga. Name endios re eaque oditiasperit viducimi, sint qui quid magnatur, quo maio. Upta que modit ulluptisque est el ius sunti omnis molo mod el',
  }, {
    header: 'SPRING CLOUD',
    text: 'An open source intiative by Kenzan with the objective of supporting developers with the tools they need for easily setting up and con guring a build system for a front-end project, by reducing boilerplate code and providing out-of-the-box functionality for the most common use cases. Ut occulleni tempore est lat dolent lacerchil ilit quia si ut fugitat. Oris endignihic tem reproruptur? Itam hario ex eum qui quia doles sanim re nobit int doluptus dererumquas cum exerum. Orro blam fugit entiasp edignatendit et peris sum ilitatur aut et autem fuga. Name endios re eaque oditiasperit viducimi, sint qui quid magnatur, quo maio. Upta que modit ulluptisque est el ius sunti omnis molo mod el',
  }];

  return (
    <div>
      <div className="image-container tech-radar-image" />
      <div className="explore-page-container">
        <div className="col-2">
          <h1 className="page-header"> Tech Radar </h1>
          <p className="page-description">
            Kenzan's view on subjects in the world of development.
          </p>
        </div>
        <div className="col-2 text-box-container carosel-container">
          <ExploreCarousel data={data} />
        </div>
      </div>
      <Footer
        display="true"
        text="About Kenzan."
        link="/about/kenzan"
      />
    </div>
  );
}

export default TechRadarPage;
