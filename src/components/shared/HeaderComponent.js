import classNames from 'classnames';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HeaderMenuDropdown from './HeaderMenuDropdown';
import SocialMenuDropdown from './SocialMenuDropdown';

/**
 * The App Header including navigation and social media links.
 */
class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showSocial: false,
    };
    this.onClick = this.onClick.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.showSocial = this.showSocial.bind(this);
    this.clearBoth = this.clearBoth.bind(this);
    this.render = this.render.bind(this);
  }

  /**
   * Toggles mobile menu dropdown on and off.
   */
  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
    this.render();
  }

  /**
   * Toggles mobile social menu dropdown on and off.
   */
  showSocial() {
    this.setState({
      showSocial: !this.state.showSocial,
    });
    this.render();
  }

  /**
   * Hides mobile menu and mobile social menu dropdowns.
   */
  clearBoth() {
    this.setState({
      showSocial: false,
      showMenu: false,
    });
  }

  onClick(ev) {
    this.props.clickEvent(ev);
    this.clearBoth();
  }

  render() {
    let exploreActiveClass = '';
    let aboutActiveClass = '';

    switch (this.props.currentPath) {
      case '/open-source':
        exploreActiveClass = classNames({
          'active-nav-short': true,
        });
        break;
      case '/tech-radar':
        exploreActiveClass = classNames({
          'active-nav-short': true,
        });
        break;
      case '/kenzan':
        aboutActiveClass = classNames({
          'active-nav-short': true,
        });
        break;
      case '/learn':
        aboutActiveClass = classNames({
          'active-nav-short': true,
        });
        break;
      default:
        break;
    }

    return (
      <div>
        <div className="navbar">
          <ul>
            <div className="navbar-links menu-items full-nav">
              <Link to="/" onClick={this.onClick}>
                <div className="kenzan-logo">
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.6 221.7">
                    <path
                      className="cls-1"
                      d="M70.4,0S60.2,55.4,60.2,110.1s9,111.6,9,111.6S78,156.4,78,116.9,70.4,0,70.4,0Z"
                    />
                    <path
                      className="cls-2"
                      d="M39.1,86.3S30,119.4,30,151.7s8,69.9,8,69.9,7.8-42.5,7.8-65.8S39.1,86.3,39.1,86.3Z"
                    />
                    <path
                      className="cls-3"
                      d="M8.4,122.1S0,148.9,0,175.4s7.3,46.2,7.3,46.2,7.2-26.9,7.2-46.1S8.4,122.1,8.4,122.1Z"
                    />
                    <path
                      className="cls-4"
                      d="M99.3,127.5s-8.5,25.2-8.5,50.4a127.74,127.74,0,0,0,7.5,43.7s7.3-25.4,7.3-43.6S99.3,127.5,99.3,127.5Z"
                    />
                  </svg>
                </div>
              </Link>
              <li className="hoverable-dropdown explore">
                <button
                  onClick={this.props.clickEvent}
                  className={exploreActiveClass}
                >
                  Explore
                </button>
                <div className="navbar-sub-menu">
                  <Link to="/open-source/" onClick={this.props.clickEvent}>
                    Open Source
                  </Link>
                  <Link to="/tech-radar/" onClick={this.props.clickEvent}>
                    Tech Radar
                  </Link>
                </div>
              </li>
              <li className="hoverable-dropdown about">
                <button
                  onClick={this.props.clickEvent}
                  className={aboutActiveClass}
                >
                  About
                </button>
                <div className="navbar-sub-menu">
                  <Link to="/kenzan/" onClick={this.props.clickEvent}>
                    Kenzan
                  </Link>
                  <Link to="/learn/" onClick={this.props.clickEvent}>
                    Learn With Us
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  to="/blog/"
                  activeClassName="active-nav"
                  onClick={this.props.clickEvent}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/connect/"
                  activeClassName="active-nav"
                  onClick={this.props.clickEvent}
                >
                  Connect
                </Link>
              </li>
            </div>
            <div className="navbar-social-media">
              <a href="http://www.twitter.com" target="new">
                <img src="/assets/Twitter.png" alt="Twitter" />
              </a>
              <a href="http://www.linkedin.com" target="new">
                <img src="/assets/Linkedin.png" alt="Linkedin" />
              </a>
              <a href="http://www.github.com" target="new">
                <img src="/assets/Github.png" alt="Github" />
              </a>
              <a href="http://www.facebook.com" target="new">
                <img src="/assets/Facebook.png" alt="Facebook" />
              </a>
            </div>
            <div className="mobile-nav-container">
              <button className="nav-menu mobile-nav no-button" onClick={this.showMenu}>
                Menu
              </button>
              <FontAwesome
                name="share-alt"
                className="nav-menu mobile-nav mobile-social-media no-button"
                onClick={this.showSocial}
              />
            </div>
          </ul>
        </div>
        <ReactCSSTransitionGroup
          transitionName="mobile-menu-animation"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {this.state.showMenu && <HeaderMenuDropdown clearBoth={this.clearBoth} />}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="mobile-social-animation"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {this.state.showSocial && <SocialMenuDropdown clearBoth={this.clearBoth} />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  /**
   * A functions that sends click events to the app component for conditional animations.
   */
  clickEvent: PropTypes.func.isRequired,
  /**
   * Current page used to highlight active class for sub pages
   */
  currentPath: PropTypes.string,
};

export default HeaderComponent;
