import React from 'react';
import $ from 'jquery';
import constants from '../../constants';
import ExploreCarousel from './ExploreCarousel';
import Footer from '../shared/FooterComponent';

/**
 * The stateful component for the Open Source page.
 * Page details Kenzan's open source projects.
 * Data is currently mocked out.
 */
class OpenSourcePage extends React.Component {

  constructor() {
    super();
    this.carouselQuery = 'posts?categories='.concat(constants.postCategories.openSource);
    this.pageQuery = 'pages?slug=open-source';
    this.state = {
      header: '',
      description: '',
      footerText: '',
      posts: [{
        header: '',
        text: '',
      }],
    };

    this.render = this.render.bind(this);
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
        posts: resultData,
      });
    });

    this.pageRequest = $.get(constants.baseUrl + this.pageQuery, (pages) => {
      const page = pages[0];
      const pageHeader = page.acf.header;
      const pageDescription = page.acf.description;
      const pageFooterText = page.acf.footer_text;

      this.setState({
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
    return (
      <div>
        <div className="open-source-image image-container" />
        <div className="explore-page-container">
          <div className="col-2">
            <h1 className="page-header"> {this.state.header} </h1>
            <p className="page-description">
              {this.state.description}
            </p>
          </div>
          <div className="col-2 text-box-container carosel-container">
            <ExploreCarousel data={this.state.posts} />
          </div>
        </div>
        <Footer
          display="true"
          text={this.state.footerText}
          link="/explore/tech-radar"
        />
      </div>);
  }
}

export default OpenSourcePage;
