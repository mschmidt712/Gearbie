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
    this.postQuery = 'posts?categories='.concat(constants.postCategories.kenzanAbout);
    this.state = {
      textBoxItems: [],
    };
  }

  componentWillMount() {
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
    this.postRequest.abort();
  }

  render() {
    return (
      <div className="about-page">
        <div className="about-image-container learn-about-image">
          <h1 className="page-header about-page-header"> Learn with us. </h1>
          <p className="about-page-description page-description"> Find out more
          about our Hack Nights and other events. Visit our
            <a href="https://www.meetup.com/Kenzan-Media-Denver-Hack-Nights/" target="blank"> meetup page</a> to take part.
          </p>
        </div>
        <div className="about-content-container">
          {this.state.textBoxItems}
        </div>
        <Footer
          display="true"
          text="Connect with Us."
          link="/connect"
        />
      </div>
    );
  }
}

export default LearnAboutPage;
