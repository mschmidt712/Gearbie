import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import $ from 'jquery';
import classNames from 'classnames';
import constants from '../../constants';
import Footer from '../shared/FooterComponent';

/**
 * The stateless component for the Home page.
 * Serves as an entry to the .IO page with a breif description of Kenzan and links to the explore section.
 */

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.pageQuery = 'pages?slug=home';
    this.state = {
      loadingHeading: true,
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
        loadingHeading: false,
        header: pageHeader,
        subHeader: pageSubHeader,
        description: pageDescription,
        footerText: pageFooter,
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
    this.pageRequest.abort();
  }

  render() {
    const loadingClass = classNames({
      loading: true,
      'loading-active': this.state.loadingHeading,
      'loading-disabled': !this.state.loadingHeading,
    });

    return (
      <div className="page">
        <div className={loadingClass}>
          <img src="./assets/loader.gif" alt="Loading" />
        </div>
        <div className="home-page-image" />
        <div className="page-container">
          <h2
            className="page-sub-header uppercase"
            dangerouslySetInnerHTML={constants.setInnerHtml(this.state.subHeader)}
          />
          <h1 className="home-page-header uppercase">
            {this.state.header[0]} {this.state.header[1]}
            <span className="emphasis"> {this.state.header[2]}</span>
          </h1>
          <p
            className="home-page-description"
            dangerouslySetInnerHTML={constants.setInnerHtml(this.state.description)}
          />
          <div className="button-container">
            <Link to="/open-source" className="btn btn-primary shadow">
              Open Source
            </Link>
            <Link to="/tech-radar" className="btn btn-primary shadow">
              Tech Radar
            </Link>
          </div>
        </div>
        <ReactCSSTransitionGroup
          transitionName="footer"
          transitionAppear
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}
        >
          <Footer
            display
            text={this.state.footerText}
            link="/open-source"
          />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

HomePage.propTypes = {
  /**
   * The error handler for ajax calls
   */
  errorHandler: PropTypes.func,
};

export default HomePage;
