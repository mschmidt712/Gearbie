import React, { PropTypes } from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import constants from '../../constants';
import ExploreCarousel from './ExploreCarousel';
import Footer from '../shared/FooterComponent';

/**
 * The stateful component for the Tech Radar page.
 * Page details new technologies on Kenzan's radar.
 */

class TechRadarPage extends React.Component {
  constructor() {
    super();
    this.carouselQuery = 'posts?categories='.concat(constants.postCategories.techRadar);
    this.pageQuery = 'pages?slug=tech-radar';
    this.state = {
      loadingHeading: true,
      loadingPosts: true,
      header: '',
      description: '',
      footerText: '',
      posts: [],
    };
  }

  componentWillMount() {
    this.carouselRequest = $.get(constants.baseUrl + this.carouselQuery)
    .done((results) => {
      const resultData = [];

      results.forEach((result) => {
        const obj = {};
        obj.header = constants.getPostHeader(result);
        obj.text = result.content.rendered;
        resultData.push(obj);
      });

      const carousel = <ExploreCarousel data={resultData} />;

      this.setState({
        loadingPosts: false,
        posts: carousel,
      });
    })
    .fail((err) => {
      this.props.errorHandler(err);
      this.setState({
        loadingPosts: false,
      });
    });

    this.pageRequest = $.get(constants.baseUrl + this.pageQuery)
    .done((pages) => {
      const page = pages[0];
      const pageHeader = page.acf.header;
      const pageDescription = page.acf.description;
      const pageFooterText = page.acf.footer_text;

      this.setState({
        loadingHeading: false,
        header: pageHeader,
        description: pageDescription,
        footerText: pageFooterText,
      });
    })
    .fail((err) => {
      this.props.errorHandler(err);
      this.setState({
        loadingHeading: false,
      });
    });
  }

  componentWillUnmount() {
    this.carouselRequest.abort();
    this.pageRequest.abort();
  }

  render() {
    const loadingClass = classNames({
      loading: true,
      'loading-active': this.state.loadingPosts || this.state.loadingHeading,
      'loading-disabled': !this.state.loadingPosts && !this.state.loadingHeading,
    });

    return (
      <div className="page">
        <div className={loadingClass}>
          <img src="/assets/loader.gif" alt="Loading" />
        </div>
        <div className="image-container tech-radar-image" />
        <div className="explore-page-container">
          <div className="col-2">
            <div className="flex-container">
              <h1
                className="page-header"
                dangerouslySetInnerHTML={constants.setInnerHtml(this.state.header)}
              />
              <p
                className="page-description"
                dangerouslySetInnerHTML={constants.setInnerHtml(this.state.description)}
              />
            </div>
          </div>
          <div className="col-2 text-box-container carosel-container">
            <div className="flex-container">
              {this.state.posts}
            </div>
          </div>
        </div>
        <Footer
          display
          text={this.state.footerText}
          link="/kenzan"
          footerClick={this.props.footerClickEvent}
        />
      </div>
    );
  }
}

TechRadarPage.propTypes = {
  /**
   * The error handler for ajax calls
   */
  errorHandler: PropTypes.func,
  /**
   * A footer click event to set scroll direction
   */
  footerClickEvent: PropTypes.func,
};


export default TechRadarPage;
