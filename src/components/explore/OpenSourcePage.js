import React from 'react';
import $ from 'jquery';
import constants from '../../constants';
import ExploreCarousel from './ExploreCarousel';
import Footer from '../shared/FooterComponent';

/**
 * The stateful component for the Open Source page.
 * Page details Kenzan's open source projects.
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
      posts: [],
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

      const carousel = <ExploreCarousel data={resultData} />;

      this.setState({
        loadingPosts: false,
        posts: carousel,
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
      <div className="page">
        <div className="open-source-image image-container" />
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
            {this.state.posts}
          </div>
        </div>
        <Footer
          display="true"
          text={this.state.footerText}
          link="/tech-radar"
        />
      </div>);
  }
}

export default OpenSourcePage;
