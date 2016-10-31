import React, { PropTypes } from 'react';
import $ from 'jquery';
import Slider from 'react-slick';
import classNames from 'classnames';
import constants from '../../constants';
import AboutCarousel from './AboutCarousel';
import TextBoxContainer from './TextBoxContainer';
import Footer from '../shared/FooterComponent';

/**
 * The stateful component for the Kenzan About page.
 * Details what we do at Kenzan, the purpose of the .IO page, and our company culture.
 */

class KenzanAboutPage extends React.Component {
  constructor() {
    super();
    this.pageQuery = 'pages?slug=kenzan-about';
    this.carouselQuery = 'posts?categories='.concat(constants.postCategories.aboutCarousel);
    this.textBoxQuery = 'posts?categories='.concat(constants.postCategories.kenzanAbout);
    this.state = {
      loadingHeading: true,
      loadingTextBoxPosts: true,
      loadingCarouselPosts: true,
      footerText: '',
      images: [],
      carouselItems: [],
      textBoxItems: [],
    };
    this.buildCarouselContainer = this.buildCarouselContainer.bind(this);
    this.setCarouselImages = this.setCarouselImages.bind(this);
    this.buildTextBoxContainer = this.buildTextBoxContainer.bind(this);
  }

  componentWillMount() {
    this.pageRequest = $.get(constants.baseUrl + this.pageQuery, (pages) => {
      const page = pages[0];
      const pageFooterText = page.acf.footer_text;

      this.setState({
        loadingHeading: false,
        footerText: pageFooterText,
      });
    })
    .fail((err) => {
      this.props.errorHandler(err);
      this.setState({
        loadingHeading: false,
      });
    });

    this.carouselRequest = $.get(constants.baseUrl + this.carouselQuery, (results) => {
      this.buildCarouselContainer(results);
      this.setCarouselImages();
    })
    .fail((err) => {
      this.props.errorHandler(err);
      this.setState({
        loadingCarouselPosts: false,
      });
    });

    this.textBoxRequest = $.get(constants.baseUrl + this.textBoxQuery, (results) => {
      this.buildTextBoxContainer(results);
    })
    .fail((err) => {
      this.props.errorHandler(err);
      this.setState({
        loadingTextBoxPosts: false,
      });
    });
  }

  componentWillUnmount() {
    this.pageRequest.abort();
    this.carouselRequest.abort();
    this.textBoxRequest.abort();
  }

  setCarouselImages() {
    this.state.images.forEach((image, index) => {
      $('.about-carousel-'.concat(index))
        .css('background',
          'linear-gradient(rgba(100, 100, 100, 0.8),\
           rgba(100, 100, 100, 0.8)), \
           url(' + image.sizes.large + ') \
           no-repeat center center')
        .css('background-size', 'cover');
    });
  }

  buildCarouselContainer(results) {
    const resultsData = [];
    const resultsImages = [];

    results.forEach((result) => {
      const obj = {};
      obj.header = result.acf.header;
      obj.description = result.acf.description;

      resultsData.push(obj);
      resultsImages.push(result.acf.background_image);
    });

    const resultsCarouselItems = <AboutCarousel data={resultsData} />;

    this.setState({
      loadingCarouselPosts: false,
      carouselItems: resultsCarouselItems,
      images: resultsImages,
    });
  }

  buildTextBoxContainer(results) {
    const resultsData = [];

    results.forEach((result) => {
      const obj = {};
      obj.title = constants.getPostHeader(result);
      obj.text = constants.getPostText(result);
      obj.linkText = result.acf.link_text;
      obj.link = result.acf.link_url;

      resultsData.push(obj);
    });

    const resultsTextBoxItems = resultsData.map((obj, index) => (
      <TextBoxContainer
        title={obj.title}
        text={obj.text}
        linkText={obj.linkText}
        link={obj.link}
        key={index}
      />)
    );

    this.setState({
      loadingTextBoxPosts: false,
      textBoxItems: resultsTextBoxItems,
    });
  }

  render() {
    const loadingClass = classNames({
      loading: true,
      'loading-active': this.state.loadingCarouselPosts || this.state.loadingTextBoxPosts || this.state.loadingHeading,
      'loading-disabled': !this.state.loadingPosts && !this.state.loadingHeading,
    });

    return (
      <div className="about-page page">
        <div className={loadingClass}>
          <img src="/assets/loader.gif" alt="Loading" />
        </div>
        {this.state.carouselItems}
        <div className="about-content-container">
          {this.state.textBoxItems}
        </div>
        <Footer
          display
          text={this.state.footerText}
          link="/blog"
          footerClick={this.props.footerClickEvent}
        />
      </div>
    );
  }
}

KenzanAboutPage.propTypes = {
  /**
   * The error handler for ajax calls
   */
  errorHandler: PropTypes.func,
  /**
   * A footer click event to set scroll direction
   */
  footerClickEvent: PropTypes.func,
};

export default KenzanAboutPage;
