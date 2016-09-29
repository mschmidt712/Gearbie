import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import { LeftArrow, RightArrow } from './CarouselArrows';

function ExploreCarousel(props) {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    draggable: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };

  const items = props.data.map((obj, index) => (
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

ExploreCarousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExploreCarousel;
