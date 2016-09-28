import React from 'react';
import Slider from 'react-slick';
import { LeftArrow, RightArrow } from './CarouselArrows';

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    draggable: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
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

  const items = data.map((obj, index) => (
    <div className="text-box" key={index}>
      <h3 className="text-box-header">{obj.header}</h3>
      <p className="text-box-content">
        {obj.text}
      </p>
    </div>)
  );

  return (
    <Slider {...settings}>
      { items }
    </Slider>
  );
}

export default SimpleSlider;
