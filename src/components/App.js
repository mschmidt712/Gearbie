import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from 'jquery';
import HeaderComponent from './shared/HeaderComponent';

/**
 * The App component for the project.
 * Overarching parent component that contains all the app components.
 */
class App extends React.Component {
  constructor() {
    super();
    this.delta = 0;
    this.scrollDown = false;
    this.scrollEnabled = true;
    this.mobile = false;
    this.state = {
      locations: ['/', '/open-source', '/tech-radar', '/kenzan', '/learn', '/blog', '/connect'],
      scrollThreshold: 60,
    };
    this.render = this.render.bind(this);
    this.navBarClick = this.navBarClick.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.watchWindowResize = this.watchWindowResize.bind(this);
    this.initiateScrollNav = this.initiateScrollNav.bind(this);
    this.disableScrollNav = this.disableScrollNav.bind(this);
    this.elementScroll = this.elementScroll.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth > 650) {
      this.initiateScrollNav();
    } else {
      this.disableScrollNav();
    }

    this.watchWindowResize();
  }

  setLocation(direction) {
    const currentPage = this.props.location.pathname;
    const locations = this.state.locations;

    locations.forEach((location, index) => {
      if (direction === 'next' && location === '/connect') {
        return;
      } else if (direction === 'next' && location === currentPage) {
        browserHistory.push(locations[index + 1]);
      } else if (direction !== 'next' && location === '/') {
        return;
      } else if (direction !== 'next' && location === currentPage) {
        browserHistory.push(locations[index - 1]);
      }
    });

    this.delta = 0;
  }

  watchWindowResize() {
    let resizeTimer;

    $(window).resize(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 650 && !this.scrollEnabled) {
          this.initiateScrollNav();
        } else if (window.innerWidth > 650 && this.scrollEnabled) {
          return;
        } else if (window.innerWidth < 650) {
          this.disableScrollNav();
        }
      }, 250);
    });
  }

  initiateScrollNav() {
    this.mobile = false;
    this.scrollEnabled = true;

    $(window).on({
      'DOMMouseScroll mousewheel': this.elementScroll,
    });
  }

  disableScrollNav() {
    this.mobile = true;
    this.scrollEnabled = false;

    $(window).off('DOMMouseScroll mousewheel');
  }

  navBarClick(ev) {
    if (ev.type === 'click') {
      this.scrollDown = true;
    }
  }

  elementScroll(e) {
    if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {
      this.delta -= 1;

      if (Math.abs(this.delta) >= this.state.scrollThreshold) {
        this.scrollDown = true;
        this.setLocation('last');
      }
    } else {
      this.delta += 1;

      if (this.delta >= this.state.scrollThreshold) {
        this.setLocation('next');
      }
    }

    return false;
  }

  render() {
    const path = this.props.location.pathname;
    const segment = path.split('/')[1] || '';

    let app = '';

    if (this.mobile) {
      app = (<div>
        <HeaderComponent clickEvent={this.navBarClick} />
          {this.props.children}
      </div>);
    } else if (!this.mobile && this.scrollDown) {
      app = (<div>
        <HeaderComponent clickEvent={this.navBarClick} />
        <ReactCSSTransitionGroup
          transitionName="pageSlider-down"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          {React.cloneElement(this.props.children, { key: segment })}
        </ReactCSSTransitionGroup>
      </div>);
    } else {
      app = (<div>
        <HeaderComponent clickEvent={this.navBarClick} />
        <ReactCSSTransitionGroup
          transitionName="pageSlider-up"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          {React.cloneElement(this.props.children, { key: segment })}
        </ReactCSSTransitionGroup>
      </div>);
    }

    this.scrollDown = false;
    return (app);
  }
}

App.propTypes = {
  /**
   * The child elements of the app.
   */
  children: PropTypes.element.isRequired,
  /**
   * The url of the current page.
   */
  location: PropTypes.objectOf(PropTypes.any),
};

export default App;
