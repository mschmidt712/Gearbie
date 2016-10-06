import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import constants from '../../constants';
import { LeftArrow, RightArrow } from './CarouselArrows';

/**
 * The stateless carousel component for use in the explore section of the site.
 */
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
      <h3 className="text-box-header uppercase">{obj.header}</h3>
      <p className="text-box-content" dangerouslySetInnerHTML={constants.setInnerHtml(obj.text)} />
    </div>)
  );

  return (
    <Slider {...settings}>
      { items }
    </Slider>
  );
}

ExploreCarousel.propTypes = {
    /**
   * An array of data objects, containing header and content for each carousel box.
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExploreCarousel;
