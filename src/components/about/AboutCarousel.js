import React, { PropTypes } from 'react';
import $ from 'jquery';
import Slider from 'react-slick';
import constants from '../../constants';

function AboutCarousel(props) {
  let items = [];

  const windowWidth = $(window).innerWidth();
  const centerPadding = (windowWidth * 0.1).toString().concat('px');

  const settings = {
    accessibility: true,
    dots: true,
    dotsClass: 'carousel-dots about-carousel-dots',
    infinite: true,
    speed: 500,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    centerMode: true,
    swipe: true,
    centerPadding,
    focusOnSelect: true,
  };

  items = props.data.map((obj, index) => {
    const carouselItem = 'about-carousel-'.concat(index);
    const classNames = 'about-image-container '.concat(carouselItem);

    return (
      <div key={index} className="about-carousel-container">
        <div className={classNames}>
          <div className="about-carousel-text">
            <h1
              className="page-header"
              dangerouslySetInnerHTML={constants.setInnerHtml(obj.header)}
            />
            <p
              className="page-description"
              dangerouslySetInnerHTML={constants.setInnerHtml(obj.description)}
            />
          </div>
        </div>
      </div>);
  });

  return (
    <Slider {...settings}>
      {items}
    </Slider>
  );
}

AboutCarousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutCarousel;
