import $ from 'jquery';
import FontAwesome from 'react-fontawesome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import React from 'react';
import HeaderMenuDropdown from './HeaderMenuDropdown';
import SocialMenuDropdown from './SocialMenuDropdown';


/**
 * The App Header including navigation and social media links.
 */
class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showSocial: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.showSocial = this.showSocial.bind(this);
    this.clearBoth = this.clearBoth.bind(this);
    this.render = this.render.bind(this);
  }

  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
    this.render();
  }

  showSocial() {
    this.setState({
      showSocial: !this.state.showSocial,
    });
    this.render();
  }

  clearBoth() {
    this.setState({
      showSocial: false,
      showMenu: false,
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <ul>
            <div className="navbar-links menu-items full-nav">
              <Link to="/">
                <img className="kenzan-logo" src="/assets/KenzanLogo1.svg" alt="Kenzan Logo" />
              </Link>
              <li><Link to="/explore/open-source" activeClassName="active-nav">Explore</Link></li>
              <li><Link to="/about/kenzan" activeClassName="active-nav">About</Link></li>
              <li><a href="http://techblog.kenzan.com/">Blog</a></li>
              <li><Link to="/connect" activeClassName="active-nav">Connect</Link></li>
            </div>
            <div className="navbar-social-media">
              <a href="http://www.twitter.com">
                <img src="/assets/Twitter.png" alt="Twitter" />
              </a>
              <a href="http://www.linkedin.com">
                <img src="/assets/Linkedin.png" alt="Linkedin" />
              </a>
              <a href="http://www.github.com">
                <img src="/assets/Github.png" alt="Github" />
              </a>
              <a href="www.facebook.com">
                <img src="/assets/Facebook.png" alt="Facebook" />
              </a>
            </div>
            <div className="mobile-nav-container">
              <button className="nav-menu mobile-nav no-button" onClick={this.showMenu}>
                Menu
              </button>
              <FontAwesome name="share-alt" className="nav-menu mobile-nav mobile-social-media no-button" onClick={this.showSocial} />
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
export default HeaderComponent;
