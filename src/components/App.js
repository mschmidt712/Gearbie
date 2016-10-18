import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ToastContainer, ToastMessage } from 'react-toastr';
import $ from 'jquery';
import HeaderComponent from './shared/HeaderComponent';
import constants from '../constants';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

/**
 * The App component for the project.
 * Overarching parent component that contains all the app components.
 * Handles page animations and scroll animations.
 */
class App extends React.Component {
  constructor() {
    super();
    this.delta = 0;
    this.scrollDown = false;
    this.state = {
      locations: ['/', '/open-source', '/tech-radar', '/kenzan', '/learn', '/blog', '/connect'],
      mobile: false,
      scrollEnabled: true,
      scrollThreshold: 60,
    };

    this.render = this.render.bind(this);
    this.addAlert = this.addAlert.bind(this);
    this.navBarClick = this.navBarClick.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.watchWindowResize = this.watchWindowResize.bind(this);
    this.initiateScrollNav = this.initiateScrollNav.bind(this);
    this.disableScrollNav = this.disableScrollNav.bind(this);
    this.elementScroll = this.elementScroll.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth > 750) {
      this.initiateScrollNav();
    } else {
      this.disableScrollNav();
    }

    this.watchWindowResize();
  }

  /**
   * Handles the routing for scrolling navigation.
   * Uses and array of page routes, the current route, and the routing direction to change pages.
   * App component animates an up scroll for direction: next and a downscroll for direction: last
   */
  setLocation(direction) {
    const currentPage = this.props.location.pathname;
    const locations = this.state.locations;

    locations.forEach((location, index) => {
      if (direction === 'next' && currentPage === '/connect') {
        return;
      } else if (direction === 'next' && location === currentPage) {
        browserHistory.push(locations[index + 1]);
      } else if (direction !== 'next' && currentPage === '/') {
        return;
      } else if (direction !== 'next' && location === currentPage) {
        browserHistory.push(locations[index - 1]);
      }
    });

    this.delta = 0;
  }

  /**
   * Watches for window resizing to disable scrolling navigation on mobile sized devices.
   */
  watchWindowResize() {
    let resizeTimer;

    $(window).resize(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 750 && !this.state.scrollEnabled) {
          this.initiateScrollNav();
        } else if (window.innerWidth > 750 && this.state.scrollEnabled) {
          return;
        } else if (window.innerWidth < 750) {
          this.disableScrollNav();
        }
      }, 250);
    });
  }

  /**
   * Enables scrolling navtigation by changing state properties
   * mobile: false
   * scrollEnabled: true
   */
  initiateScrollNav() {
    this.setState({
      mobile: false,
      scrollEnabled: true,
    });

    $(window).on({
      'DOMMouseScroll mousewheel': this.elementScroll,
    });
  }

  /**
   * Disables scrolling navtigation by changing state properties
   * mobile: true
   * scrollEnabled: false
   */
  disableScrollNav() {
    this.setState({
      mobile: true,
      scrollEnabled: false,
    });

    $(window).off('DOMMouseScroll mousewheel');
  }

  /**
   * A helper function that communicates nav bar clicks from child routes to the app component.
   * App component animations a down scroll for navbar clicks.
   */
  navBarClick(ev) {
    if (ev.type === 'click') {
      this.scrollDown = true;
    }
  }

  /**
   * Watching scroll events and determines if scroll event meets scroll threshold
   * If threshold is met, setLocation function is called.
   */
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

  addAlert(err) {
    const errCode = err.status;
    const errText = constants.statusCodes(errCode);

    this.toastr.error(
      errCode + ' - ' + errText,
      'Page Load Error',
      {
        timeOut: 10000,
        closeButton: true,
        preventDuplicates: true,
      });
  }

  render() {
    const path = this.props.location.pathname;
    const segment = path.split('/')[1] || '';
    const newChildren = React.Children.map(this.props.children, child => (
      React.cloneElement(child, { key: segment, errorHandler: this.addAlert })
    ));

    let app = '';

    if (this.state.mobile) {
      app = (<div>
        <ToastContainer
          ref={(ref) => { this.toastr = ref; }}
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right"
        />
        <HeaderComponent clickEvent={this.navBarClick} />
          {this.props.children}
      </div>);
    } else if (!this.state.mobile && this.scrollDown) {
      app = (<div>
        <ToastContainer
          ref={(ref) => { this.toastr = ref; }}
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right"
        />
        <HeaderComponent clickEvent={this.navBarClick} currentPath={path} />
        <ReactCSSTransitionGroup
          transitionName="pageSlider-down"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          {newChildren}
        </ReactCSSTransitionGroup>
      </div>);
    } else {
      app = (<div>
        <ToastContainer
          ref={(ref) => { this.toastr = ref; }}
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right"
        />
        <HeaderComponent clickEvent={this.navBarClick} currentPath={path} />
        <ReactCSSTransitionGroup
          transitionName="pageSlider-up"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          {newChildren}
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
  children: PropTypes.element,
  /**
   * The url of the current page.
   */
  location: PropTypes.objectOf(PropTypes.any),
};

export default App;
