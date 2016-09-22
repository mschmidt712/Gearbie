import React from 'react';
import { Link } from 'react-router';

function TechRadarPage() {
  return (
    <div>
      <div className="image-container tech-radar-image">
        <div className="col-2-page-container">
          <div className="col-2">
            <h1 className="page-header"> Tech Radar </h1>
            <p className="page-description">
              Kenzan's view on subjects in the world of development.
            </p>
          </div>
          <div className="col-2 text-box-container">
            <div className="text-box">
              <h3 className="text-box-header">SPRING CLOUD</h3>
              <p className="text-box-content">An open source intiative by Kenzan
                with the objective of supporting developers with the tools they
                need for easily setting up and con guring a build system for a
                front-end project, by reducing boilerplate code and providing
                out-of-the-box functionality for the most common use cases.

                Ut occulleni tempore est lat dolent lacerchil ilit
                quia si ut fugitat. Oris endignihic tem reproruptur?
                Itam hario ex eum qui quia doles sanim re nobit int
                doluptus dererumquas cum exerum. Orro blam fugit entiasp
                edignatendit et peris sum ilitatur aut et autem fuga. Name
                endios re eaque oditiasperit viducimi, sint qui quid magnatur,
                quo maio. Upta que modit ulluptisque est el ius sunti omnis molo mod el
              </p>
              <div className="explore-arrow-container arrow-container">
                <Link to="/explore/open-source">
                  <i className="material-icons lg white shadow">keyboard_arrow_right</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechRadarPage;
