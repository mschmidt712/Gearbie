import React from 'react';
import $ from 'jquery';
import constants from '../../constants';
import TextBoxContainer from './TextBoxContainer';
import Footer from '../shared/FooterComponent';

/**
 * The stateful component for the Learn About page.
 * Details what we do at Kenzan, the purpose of the .IO page, and our company culture.
 * Currently contains same data at Kenzan About page.
 */

class LearnAboutPage extends React.Component {
  constructor() {
    super();
    this.pageQuery = 'pages?slug=learn-about';
    this.postQuery = 'posts?categories='.concat(constants.postCategories.learnAbout);
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
        obj.linkText = 'connect with kenzan';
        obj.link = 'http://kenzan.com';
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
        <div className="about-image-container learn-about-image">
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
          display="true"
          text={this.state.footerText}
          link="/connect"
        />
      </div>
    );
  }
}

export default LearnAboutPage;
