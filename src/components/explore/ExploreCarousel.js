import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import constants from '../../constants';
import { LeftArrow, RightArrow } from './CarouselArrows';

const settings = {
  accessibility: true,
  dots: true,
  dotsClass: 'carousel-dots',
  infinite: true,
  speed: 500,
  draggable: true,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
};

/**
 * The stateless carousel component for use in the explore section of the site.
 */
class ExploreCarousel extends React.Component {

  constructor(props) {
    super(props);

    this.maxHeight = 0;
    this.items = props.data.map((obj, index) => (
      <div key={index}>
        <div className="text-box">
          <h3 className="text-box-header uppercase">{obj.header}</h3>
          <p
            className="text-box-content"
            dangerouslySetInnerHTML={constants.setInnerHtml(obj.text)}
          />
        </div>
      </div>)
    );

    this.setSlideHeights = this.setSlideHeights.bind(this);
    this.watchWindowResize = this.watchWindowResize.bind(this);
  }

  componentDidMount() {
    this.setSlideHeights();
    this.watchWindowResize();
  }

  componentWillUnmount() {
    return $(window).off('resize');
  }

  setSlideHeights() {
    this.maxHeight = 0;
    const slideContent = $('.slick-track').find('.text-box');

    slideContent.each((index, slide) => {
      const slideHeight = $(slide).height();
      if (slideHeight > this.maxHeight) {
        this.maxHeight = slideHeight;
      }
    });

    const slideContainer = $('.slick-slide');
    slideContainer.each((index, slide) => {
      $(slide).height(this.maxHeight + 40);
    });
  }

  watchWindowResize() {
    let resizeTimer;

    $(window).resize(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        console.log('window resized');
        this.setSlideHeights();
      }, 200);
    });
  }

  render() {
    return (
      <Slider {...settings}>
        { this.items }
      </Slider>
    );
  }
}

ExploreCarousel.propTypes = {
    /**
   * An array of data objects, containing header and content for each carousel box.
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExploreCarousel;
