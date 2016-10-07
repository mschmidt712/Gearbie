import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import constants from '../../constants';
import Footer from '../shared/FooterComponent';

/**
 * The stateless component for the Home page.
 * Serves as an entry to the .IO page with a breif description of Kenzan and links to the explore section.
 */

class HomePage extends React.Component {
  constructor() {
    super();
    this.pageQuery = 'pages?slug=home';
    this.state = {
      header: '',
      subHeader: '',
      description: '',
      footerText: '',
    };
  }

  componentWillMount() {
    this.pageRequest = $.get(constants.baseUrl + this.pageQuery, (results) => {
      const result = results[0];

      const pageHeader = result.acf.header.split(' ');
      const pageSubHeader = result.acf.home_subheader;
      const pageDescription = result.acf.description;
      const pageFooter = result.acf.footer_text;

      this.setState({
        header: pageHeader,
        subHeader: pageSubHeader,
        description: pageDescription,
        footerText: pageFooter,
      });
    });
  }

  componentWillUnmount() {
    this.pageRequest.abort();
  }

  render() {
    return (
      <div>
        <div className="home-page-image" />
        <div className="page-container">
          <h2 className="page-sub-header uppercase"> {this.state.subHeader} </h2>
          <h1 className="home-page-header uppercase">
            {this.state.header[0]} {this.state.header[1]}
            <span className="emphasis"> {this.state.header[2]} </span>
          </h1>
          <p className="home-page-description">
            {this.state.description}
          </p>
          <div className="button-container">
            <Link to="/explore/open-source" className="btn btn-primary">
              Open Source
            </Link>
            <Link to="/explore/tech-radar" className="btn btn-primary">
              Tech Radar
            </Link>
          </div>
        </div>
        <Footer
          display="true"
          text={this.state.footerText}
          link="/explore/open-source"
        />
      </div>
    );
  }
}

export default HomePage;
