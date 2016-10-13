import React from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import constants from '../../constants';
import Footer from '../shared/FooterComponent';

/**
 * The stateful component for the Open Source page.
 * Page details Kenzan's open source projects.
 */
class BlogPage extends React.Component {

  constructor() {
    super();
    this.pageQuery = 'pages?slug=blog';
    this.state = {
      loadingHeading: true,
      header: '',
      description: '',
      footerText: '',
    };

    this.render = this.render.bind(this);
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
      <div className="page blog-page">
        <div className={loadingClass}>
          <img src="./assets/loader.gif" alt="Loading" />
        </div>
        <div className="open-source-image image-container" />
        <div className="blog-page-container">
          <div>
            <h1
              className="page-header"
              dangerouslySetInnerHTML={constants.setInnerHtml(this.state.header)}
            />
            <p
              className="page-description blog-page-description"
              dangerouslySetInnerHTML={constants.setInnerHtml(this.state.description)}
            />
            <p className="page-description blog-page-link">
              <a href="http://techblog.kenzan.com/" target="new">
                Check out the blog now.
              </a>
            </p>
          </div>
        </div>
        <Footer
          display="true"
          text={this.state.footerText}
          link="/connect"
        />
      </div>);
  }
}

export default BlogPage;
