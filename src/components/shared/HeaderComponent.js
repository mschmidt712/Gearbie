import $ from 'jquery';
import FontAwesome from 'react-fontawesome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import React from 'react';
import HeaderMenuDropdown from './HeaderMenuDropdown';

/**
 * The App Header including navigation and social media links.
 */
class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.clearMenu = this.clearMenu.bind(this);
    this.render = this.render.bind(this);
  }

  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
    this.render();
  }

  clearMenu() {
    this.setState({
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
              <button className="nav-menu mobile-nav mobile-social-media no-button">
                <li> Social </li>
              </button>
              <FontAwesome name="rocket" />
            </div>
          </ul>
        </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={201}
          transitionLeaveTimeout={200}

        >
          {this.state.showMenu && <HeaderMenuDropdown clearMenu={this.clearMenu} />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
export default HeaderComponent;
