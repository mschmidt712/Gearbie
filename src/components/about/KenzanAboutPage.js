import React from 'react';
import $ from 'jquery';
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
      header: '',
      description: '',
      footerText: '',
      textBoxItems: [],
    };
  }

  componentWillMount() {
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

    this.postRequest = $.get(constants.baseUrl + this.postQuery, (results) => {
      const resultsData = [];

      results.forEach((result) => {
        const obj = {};
        obj.title = constants.getPostHeader(result);
        obj.text = constants.getPostText(result);
        obj.linkText = result.acf.about_link_text;
        obj.link = result.acf.about_link_url;
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
        textBoxItems: resultsTextBoxItems,
      });
    });
  }

  componentWillUnmount() {
    this.pageRequest.abort();
    this.postRequest.abort();
  }

  render() {
    return (
      <div className="about-page page">
        <div className="about-image-container kenzan-about-image">
          <h1 className="page-header"> {this.state.header} </h1>
          <p className="page-description">
            {this.state.description}
          </p>
        </div>
        <div className="about-content-container">
          {this.state.textBoxItems}
        </div>
        <Footer
          display="true"
          text={this.state.footerText}
          link="/connect"
        />
      </div>
    );
  }
}

export default KenzanAboutPage;
