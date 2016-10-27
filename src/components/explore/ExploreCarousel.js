import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import constants from '../../constants';

const settings = {
  accessibility: true,
  adaptiveHeight: false,
  arrows: true,
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
 * This component handles dynamically sizing the carousel box and the navigation arrows.
 */
class ExploreCarousel extends React.Component {

  constructor(props) {
    super(props);

    this.maxHeight = 0;
    this.items = props.data.map((obj, index) => (
      <div key={index}>
        <div className="text-box">
          <h3
            className="text-box-header uppercase"
            dangerouslySetInnerHTML={constants.setInnerHtml(obj.header)}
          />
          <p
            className="text-box-content"
            dangerouslySetInnerHTML={constants.setInnerHtml(obj.text)}
          />
        </div>
      </div>)
    );

    this.setSlideHeights = this.setSlideHeights.bind(this);
    this.setArrowHeights = this.setArrowHeights.bind(this);
    this.watchWindowResize = this.watchWindowResize.bind(this);
  }

  componentDidMount() {
    const windowWidth = $(window).innerWidth();
    this.setSlideHeights(windowWidth);
    this.setArrowHeights(windowWidth);

    this.watchWindowResize();
  }

  componentWillUnmount() {
    return $(window).off('resize');
  }

  setSlideHeights(windowWidth) {
    this.maxHeight = 0;
    const slideContent = $('.slick-track').find('.text-box');

    slideContent.each((index, slide) => {
      const slideHeight = $(slide).height();
      if (slideHeight > this.maxHeight) {
        this.maxHeight = slideHeight;
      }
    });

    let extraPadding = 0;
    if (windowWidth < 750) {
      extraPadding = 0;
    } else {
      extraPadding = 40;
    }

    const slideContainer = $('.slick-slide');
    slideContainer.each((index, slide) => {
      $(slide).height(this.maxHeight + extraPadding);
    });
  }

  setArrowHeights(windowWidth) {
    let arrowHeight = 0;

    if (windowWidth < 1200) {
      arrowHeight = this.maxHeight + 35;
    } else if (windowWidth >= 1200) {
      arrowHeight = 84;
    }

    const arrowContainer = $('.arrow-container');
    arrowContainer.each((index, arrow) => {
      $(arrow).height(arrowHeight);
    });
  }

  /**
   * Watches for window resize events to resize carousel and arrow heights.
   */
  watchWindowResize() {
    let resizeTimer;
    let windowWidth = 0;

    $(window).resize(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        windowWidth = $(window).innerWidth();
        this.setSlideHeights(windowWidth);
        this.setArrowHeights(windowWidth);
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
