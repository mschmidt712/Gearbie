import React from 'react';
import ExploreCarousel from './ExploreCarousel';
import Footer from '../shared/FooterComponent';

/**
 * The stateful component for the Open Source page.
 * Page details Kenzan's open source projects.
 * Data is currently mocked out.
 */
function OpenSourcePage() {
  const data = [{
    header: 'KEYSTONE',
    text: 'An open source intiative by Kenzan with the objective of supporting developers with the tools they need for easily setting up and con guring a build system for a front-end project, by reducing boilerplate code and providing out-of-the-box functionality for the most common use cases. Ut occulleni tempore est lat dolent lacerchil ilit quia si ut fugitat. Oris endignihic tem reproruptur? Itam hario ex eum qui quia doles sanim re nobit int doluptus dererumquas cum exerum. Orro blam fugit entiasp edignatendit et peris sum ilitatur aut et autem fuga. Name endios re eaque oditiasperit viducimi, sint qui quid magnatur, quo maio. Upta que modit ulluptisque est el ius sunti omnis molo mod el',
  }, {
    header: 'KEYSTONE',
    text: 'An open source intiative by Kenzan with the objective of supporting developers with the tools they need for easily setting up and con guring a build system for a front-end project, by reducing boilerplate code and providing out-of-the-box functionality for the most common use cases. Ut occulleni tempore est lat dolent lacerchil ilit quia si ut fugitat. Oris endignihic tem reproruptur? Itam hario ex eum qui quia doles sanim re nobit int doluptus dererumquas cum exerum. Orro blam fugit entiasp edignatendit et peris sum ilitatur aut et autem fuga. Name endios re eaque oditiasperit viducimi, sint asd fasdfsdafasdfasdfasdfasd fasefasdasdfasdfasdf asdfasdfasdfasdfasd asdasdfasdf qui quid magnatur, quo maio. Upta que modit ulluptisque est el ius sunti omnis molo mod el',
  }, {
    header: 'KEYSTONE',
    text: 'An open source intiative by Kenzan with the objective of supporting developers with the tools they need for easily setting up and con guring a build system for a front-end project, by reducing boilerplate code and providing out-of-the-box functionality for the most common use cases. Ut occulleni tempore est lat dolent lacerchil ilit quia si ut fugitat. Oris endignihic tem reproruptur? Itam hario ex eum qui quia doles sanim re nobit int doluptus dererumquas cum exerum. Orro blam fugit entiasp edignatendit et peris sum ilitatur aut et autem fuga. Name endios re eaque oditiasperit viducimi, sint qui quid magnatur, quo maio. Upta que modit ulluptisque est el ius sunti omnis molo mod el',
  }, {
    header: 'KEYSTONE',
    text: 'An open source intiative by Kenzan with the objective of supporting developers with the tools they need for easily setting up and con guring a build system for a front-end project, by reducing boilerplate code and providing out-of-the-box functionality for the most common use cases. Ut occulleni tempore est lat dolent lacerchil ilit quia si ut fugitat. Oris endignihic tem reproruptur? Itam hario ex eum qui quia doles sanim re nobit int doluptus dererumquas cum exerum. Orro blam fugit entiasp edignatendit et peris sum ilitatur aut et autem fuga. Name endios re eaque oditiasperit viducimi, sint qui quid magnatur, quo maio. Upta que modit ulluptisque est el ius sunti omnis molo mod el',
  }];

  return (
    <div className="page">
      <div className="open-source-image image-container" />
      <div className="explore-page-container">
        <div className="col-2">
          <h1 className="page-header"> Open Source </h1>
          <p className="page-description">
            Learn about Kenzan's contribution to the open source community.
          </p>
        </div>
        <div className="col-2 text-box-container carosel-container">
          <ExploreCarousel data={data} />
        </div>
      </div>
      <Footer
        display="true"
        text="Explore. Contribute. Code."
        link="/tech-radar"
      />
    </div>
  );
}

export default OpenSourcePage;
