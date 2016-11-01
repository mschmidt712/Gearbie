import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { ToastContainer, ToastMessage } from 'react-toastr';
import $ from 'jquery';
import HeaderComponent from './shared/HeaderComponent';
import constants from '../constants';
import AppScroll from './AppScroll';

const AppScrollObj = new AppScroll();
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
    this.scrollThreshold = 1500; // ms
    this.state = {
      scrollDown: true,
      locations: ['/', '/open-source', '/tech-radar', '/kenzan', '/blog', '/connect'],
      scrollEnabled: true,
    };

    this.render = this.render.bind(this);
    this.addAlert = this.addAlert.bind(this);
    this.navBarClick = this.navBarClick.bind(this);
    this.footerClick = this.footerClick.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.watchWindowResize = this.watchWindowResize.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth > 750) {
      this.setState({
        scrollEnabled: true,
      });
      AppScrollObj.initiateScrollNav(this.setLocation, this.scrollThreshold);
    } else {
      this.setState({
        scrollEnabled: false,
      });
      AppScrollObj.disableScrollNav();
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
        this.setState({
          scrollDown: false,
        });
        browserHistory.push(locations[index + 1]);
      } else if (direction !== 'next' && currentPage === '/') {
        return;
      } else if (direction !== 'next' && location === currentPage) {
        this.setState({
          scrollDown: true,
        });
        browserHistory.push(locations[index - 1]);
      }
    });
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
          AppScrollObj.initiateScrollNav(this.setLocation);

          this.setState({
            scrollEnabled: true,
          });
        } else if (window.innerWidth > 750 && this.state.scrollEnabled) {
          return;
        } else if (window.innerWidth < 750) {
          AppScrollObj.disableScrollNav();

          this.setState({
            scrollEnabled: false,
          });
        }
      }, 250);
    });
  }

  /**
   * A helper function that communicates nav bar clicks from child routes to the app component.
   * App component animations a down scroll for navbar clicks.
   */
  navBarClick(ev) {
    if (ev.type === 'click') {
      this.setState({
        scrollDown: true,
      });
    }
  }

  /**
   * A helper function that communicates footer clicks from child routes to the app component.
   * App component animations a down up for footer clicks.
   */
  footerClick(ev) {
    if (ev.type === 'click') {
      this.setState({
        scrollDown: false,
      });
    }
  }

  /**
   * A function that generates toastr boxes on ajax errors.
   */
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
      React.cloneElement(child, { key: segment, errorHandler: this.addAlert, footerClickEvent: this.footerClick })
    ));
    let app = '';

    if (!this.state.scrollEnabled) {
      app = (<div>
        <ToastContainer
          ref={(ref) => { this.toastr = ref; }}
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right"
        />
        <HeaderComponent clickEvent={this.navBarClick} />
        {newChildren}
      </div>);
    } else if (this.state.scrollDown) {
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
