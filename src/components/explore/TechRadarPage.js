import React from 'react';
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
      posts: [{
        header: '',
        text: '',
      }],
    };
  }

  componentWillMount() {
    this.carouselRequest = $.get(constants.baseUrl + this.carouselQuery, (results) => {
      const resultData = [];

      results.forEach((result) => {
        const obj = {};
        obj.header = constants.getPostHeader(result);
        obj.text = constants.getPostText(result);
        resultData.push(obj);
      });

      this.setState({
        loadingPosts: false,
        posts: resultData,
      });
    });

    this.pageRequest = $.get(constants.baseUrl + this.pageQuery, (pages) => {
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
          <img src="./assets/loader.gif" alt="Loading" />
        </div>
        <div className="image-container tech-radar-image" />
        <div className="explore-page-container">
          <div className="col-2">
            <h1
              className="page-header"
              dangerouslySetInnerHTML={constants.setInnerHtml(this.state.header)}
            />
            <p
              className="page-description"
              dangerouslySetInnerHTML={constants.setInnerHtml(this.state.description)}
            />
          </div>
          <div className="col-2 text-box-container carosel-container">
            <ExploreCarousel data={this.state.posts} />
          </div>
        </div>
        <Footer
          display="true"
          text={this.state.footerText}
          link="/kenzan"
        />
      </div>
    );
  }
}

export default TechRadarPage;
