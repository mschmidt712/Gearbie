import React, { PropTypes } from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import constants from '../../constants';
import ExploreCarousel from './ExploreCarousel';
import Footer from '../shared/FooterComponent';

/**
 * The stateful component for the Open Source page.
 * Page details Kenzan's open source projects.
 */

class OpenSourcePage extends React.Component {

  constructor(props) {
    super(props);
    this.carouselQuery = 'posts?categories='.concat(constants.postCategories.openSource);
    this.pageQuery = 'pages?slug=open-source';
    this.state = {
      loadingHeading: true,
      loadingPosts: true,
      header: '',
      description: '',
      footerText: '',
      posts: [],
    };

    this.render = this.render.bind(this);
  }

  componentWillMount() {
    this.carouselRequest = $.get(constants.baseUrl + this.carouselQuery)
    .done((results) => {
      const resultData = [];

      results.forEach((result) => {
        const obj = {};
        obj.header = constants.getPostHeader(result);
        obj.text = constants.getPostText(result);
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
        <div className="open-source-image image-container" />
        <div className="explore-page-container">
          <div className="col-2">
            <div className="header-container">
              <h1
                className="page-header"
                dangerouslySetInnerHTML={constants.setInnerHtml(this.state.header)}
              />
              <h2
                className="page-description"
                dangerouslySetInnerHTML={constants.setInnerHtml(this.state.description)}
              />
            </div>
          </div>
          <div className="col-2 text-box-container carosel-container">
            {this.state.posts}
          </div>
        </div>
        <Footer
          display
          text={this.state.footerText}
          link="/tech-radar"
        />
      </div>);
  }
}

OpenSourcePage.propTypes = {
  /**
   * The error handler for ajax calls
   */
  errorHandler: PropTypes.func,
};

export default OpenSourcePage;
