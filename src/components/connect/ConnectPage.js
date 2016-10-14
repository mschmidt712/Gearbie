import React, { PropTypes } from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import constants from '../../constants';
import ContactInfo from './ContactInfo';
import EventContainer from './EventContainer';
import Footer from '../shared/FooterComponent';

/**
 * The stateless component for the Connect page.
 * Details office locations, contact information, and upcoming Kenzan events.
 */
class ConnectPage extends React.Component {
  constructor() {
    super();
    this.postQuery = 'posts?categories='.concat(constants.postCategories.connect);
    this.state = {
      loadingPosts: true,
      events: [],
    };
    this.buildEventContainer = this.buildEventContainer.bind(this);
  }

  componentWillMount() {
    this.postRequest = $.get(constants.baseUrl + this.postQuery)
    .done((events) => {
      this.buildEventContainer(events);
    })
    .fail((err) => {
      this.props.errorHandler(err);
      this.setState({
        loadingPosts: false,
      });
    });
  }

  componentWillUnmount() {
    this.postRequest.abort();
  }

  buildEventContainer(events) {
    const eventsData = [];

    events.forEach((event) => {
      const obj = {};
      obj.description = constants.getPostText(event);
      obj.linkText = event.acf.link_text;
      obj.linkUrl = event.acf.link_url;
      eventsData.push(obj);
    });

    const eventItems = eventsData.map((obj, index) => (
      <EventContainer
        description={obj.description}
        linkText={obj.linkText}
        linkUrl={obj.linkUrl}
        key={index}
      />
    ));

    this.setState({
      loadingPosts: false,
      events: eventItems,
    });
  }

  render() {
    const loadingClass = classNames({
      loading: true,
      'loading-active': this.state.loadingPosts,
      'loading-disabled': !this.state.loadingPosts,
    });

    return (
      <div className="connect-page page">
        <div className={loadingClass}>
          <img src="./assets/loader.gif" alt="Loading" />
        </div>
        <div className="connect-page-container">
          <div className="connect-contact-info col-2">
            <h1> Kenzan </h1>
            <div className="cities">
              <div className="col-2">
                <h3> NEW YORK CITY </h3>
                <h3> DENVER </h3>
              </div>
              <div className="col-2">
                <h3> PROVIDENCE </h3>
                <h3> LOS ANGELES </h3>
              </div>
            </div>
            <div className="contact-info-column">
              <ContactInfo
                category="email"
                text="info@kenzan.com"
              />
              <ContactInfo
                category="phone"
                text="212.239.1010"
              />
            </div>
          </div>
          <div className="connect-content col-2 text-box-container">
            <div className="text-box">
              <h3 className="text-box-header">EVENTS</h3>
              {this.state.events}
            </div>
          </div>
        </div>
        <Footer
          display={false}
          text=""
        />
      </div>
    );
  }
}

ConnectPage.propTypes = {
  /**
   * The error handler for ajax calls
   */
  errorHandler: PropTypes.func,
};

export default ConnectPage;
