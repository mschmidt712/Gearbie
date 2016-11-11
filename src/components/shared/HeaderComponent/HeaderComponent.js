import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import toastr from 'toastr';
import * as userActions from '../../../actions/userActions';
import constants from '../../constants.js';
import DropDownMenu from './DropDownMenuComponent';
import LoginComponent from '../../LoginComponent/LoginComponent';

const categories = constants.categories;

/**
 * The App Header
 */
class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      dropDownVisible: false,
      categoryDropDownVisible: false,
      loginModalDisplayed: false,
      categories: this.props.categories,
      categoryDropdown: [],
    };

    this.onLogout = this.onLogout.bind(this);
    this.buildCategoryDropdown = this.buildCategoryDropdown.bind(this);
    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this);
    this.toggleCategoryDropdown = this.toggleCategoryDropdown.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  componentWillMount() {
    this.buildCategoryDropdown();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      user: newProps.user,
    });
  }

  onLogout() {
    this.props.actions.logoutUser();
    toastr.success('You are now logged out.');
  }

  buildCategoryDropdown() {
    const categoryDropdown = [];
    console.log(this.state.categories);

    if (this.state.categories) {
      this.state.categories.forEach((category, index) => {
        categoryDropdown.push(<li key={index}>
          <Link to={category.link}>{category.title}</Link>
        </li>);
      });
    }

    this.setState({
      categoryDropdown,
    });
  }

  toggleDropdownMenu() {
    this.setState({
      dropDownVisible: !this.state.dropDownVisible,
    });
  }

  toggleCategoryDropdown() {
    this.setState({
      categoryDropDownVisible: !this.state.categoryDropDownVisible,
    });
  }

  toggleLoginModal() {
    this.setState({
      loginModalDisplayed: !this.state.loginModalDisplayed,
    });
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header-image-container">
            <Link to="/"><h1>Gearbie</h1></Link>
            <h5>A Denver/Boulder Gear Share</h5>
            <button className="menu-button" onClick={this.toggleDropdownMenu}>
              <i className="material-icons">menu</i>
            </button>
            <ReactCSSTransitionGroup
              transitionName="slide-left"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {this.state.dropDownVisible
                && <DropDownMenu
                  categories={categories}
                  user={this.state.user}
                  loginVisibile={this.state.loginModalDisplayed}
                  loginHandler={this.toggleLoginModal}
                  logoutHandler={this.onLogout}
                  clickEvent={this.toggleDropdownMenu}
                />}
            </ReactCSSTransitionGroup>
            <ul className="screen-nav">
              <li><button className="dropdown-nav-item" onClick={this.toggleCategoryDropdown}>
                Find Gear
                {!this.state.categoryDropDownVisible && <i className="material-icons">add</i>}
                {this.state.categoryDropDownVisible && <i className="material-icons">remove</i>}
                {this.state.categoryDropDownVisible &&
                  <ul className="category-dropdown">
                    {this.state.categoryItems}
                  </ul>}
              </button></li>
              <li><a href="">Share Your Gear</a></li>
              <li><a href="">Need Help?</a></li>
              {this.state.user.username &&
                <li><a href="">
                  <img src={this.state.user.imgSrc} alt="user" className="user-image" />
                    {this.state.user.username}
                </a></li>}
              {!this.state.user.username &&
                <li><button className="dropdown-nav-item" onClick={this.toggleLoginModal}>
                  Login
                </button></li>}
            </ul>
          </div>
        </div>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.dropDownVisible &&
            <div className="dimmer" onClick={this.toggleDropdownMenu} />}
        </ReactCSSTransitionGroup>
          {this.state.loginModalDisplayed &&
            <div>
              <LoginComponent loginVisible={this.toggleLoginModal} />
              <div className="dimmer" onClick={this.toggleLoginModal} />
            </div>}
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
