import React, { PropTypes } from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import constants from '../../constants';
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
    this.postQuery = 'posts?categories='.concat(constants.postCategories.kenzanAbout);
    this.state = {
      loadingHeading: true,
      loadingPosts: true,
      header: '',
      description: '',
      footerText: '',
      textBoxItems: [],
    };
    this.buildTextBoxContainer = this.buildTextBoxContainer.bind(this);
  }

  componentWillMount() {
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
    })
    .fail((err) => {
      this.props.errorHandler(err);
      this.setState({
        loadingHeading: false,
      });
    });

    this.postRequest = $.get(constants.baseUrl + this.postQuery, (results) => {
      this.buildTextBoxContainer(results);
    })
    .fail((err) => {
      this.props.errorHandler(err);
      this.setState({
        loadingPosts: false,
      });
    });
  }

  componentWillUnmount() {
    this.pageRequest.abort();
    this.postRequest.abort();
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
      loadingPosts: false,
      textBoxItems: resultsTextBoxItems,
    });
  }

  render() {
    const loadingClass = classNames({
      loading: true,
      'loading-active': this.state.loadingPosts || this.state.loadingHeading,
      'loading-disabled': !this.state.loadingPosts && !this.state.loadingHeading,
    });

    return (
      <div className="about-page page">
        <div className={loadingClass}>
          <img src="/assets/loader.gif" alt="Loading" />
        </div>
        <div className="about-image-container kenzan-about-image">
          <h1
            className="page-header"
            dangerouslySetInnerHTML={constants.setInnerHtml(this.state.header)}
          />
          <p
            className="page-description"
            dangerouslySetInnerHTML={constants.setInnerHtml(this.state.description)}
          />
        </div>
        <div className="about-content-container">
          {this.state.textBoxItems}
        </div>
        <Footer
          display
          text={this.state.footerText}
          link="/learn/"
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
};

export default KenzanAboutPage;
