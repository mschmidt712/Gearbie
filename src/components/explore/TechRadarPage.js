import React from 'react';
import $ from 'jquery';
import constants from '../../constants';
import ExploreCarousel from './ExploreCarousel';
import Footer from '../shared/FooterComponent';

/**
 * The stateful component for the Tech Radar page.
 * Page details new technologies on Kenzan's radar.
 * Data is currently mocked out.
 */
class TechRadarPage extends React.Component {
  constructor() {
    super();
    this.carouselQuery = 'posts?categories='.concat(constants.postCategories.techRadar);
    this.pageQuery = 'pages?slug=tech-radar';
    this.state = {
      header: '',
      description: '',
      data: [{
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
        data: resultData,
      });
    });

    this.pageRequest = $.get(constants.baseUrl + this.pageQuery, (results) => {
      const result = results[0];
      let resultHeader = '';
      let resultDescription = '';

      resultHeader = constants.getPageHeader(result);
      resultDescription = constants.getPageDescription(result);

      this.setState({
        header: resultHeader,
        description: resultDescription,
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
        <div className="image-container tech-radar-image" />
        <div className="explore-page-container">
          <div className="col-2">
            <h1 className="page-header"> {this.state.header} </h1>
            <p
              className="page-description"
              dangerouslySetInnerHTML={constants.setInnerHtml(this.state.description)}
            />
          </div>
          <div className="col-2 text-box-container carosel-container">
            <ExploreCarousel data={this.state.data} />
          </div>
        </div>
        <Footer
          display="true"
          text="About Kenzan."
          link="/about/kenzan"
        />
      </div>
    );
  }
}

export default TechRadarPage;
