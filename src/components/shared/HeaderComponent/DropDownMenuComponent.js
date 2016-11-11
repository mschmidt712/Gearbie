import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      categoryItems: [],
      categories: false,
      loginVisibile: this.props.loginVisibile,
    };

    this.toggleCategories = this.toggleCategories.bind(this);
  }

  componentWillMount() {
    const categoryItems = [];
    this.props.categories.forEach((category, index) => {
      categoryItems.push(
        <li key={index}>
          <Link to={category.link} className="nav-link">{category.title}</Link>
        </li>);
    });

    this.setState({
      categoryItems,
    });
  }

  toggleCategories() {
    this.setState({
      categories: !this.state.categories,
    });
  }

  render() {
    return (
      <div className="dropdown-menu-container">
        <ul className="main-nav-dropdown">
          {this.props.user.username && <li className="main-nav-item" onClick={this.props.clickEvent}>
            <img src={this.props.user.imgSrc} alt="user" className="user-image" />
            {this.props.user.username}
            <button className="logout-button" onClick={this.props.logoutHandler}> Logout </button>
          </li>}
          {!this.props.user.username &&
            <button
              className="main-nav-item"
              onClick={() => { this.props.loginHandler(); this.props.clickEvent(); }}
            >Login</button>}
          <li><button onClick={this.toggleCategories} className="main-nav-item">
            Find Gear
              {!this.state.categories && <i className="material-icons">add</i>}
              {this.state.categories && <i className="material-icons">remove</i>}
          </button>
          </li>
            {this.state.categories &&
              <ul className="category-dropdown" onClick={this.props.clickEvent}>
                {this.state.categoryItems}
              </ul>}
          <li className="main-nav-item" onClick={this.props.clickEvent}>Rent Your Gear</li>
          <li className="main-nav-item" onClick={this.props.clickEvent}>Need Help?</li>
        </ul>
      </div>
    );
  }
}

DropDownMenu.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    imgSrc: PropTypes.string,
  }),
  categories: PropTypes.arrayOf(PropTypes.object),
  clickEvent: PropTypes.func.isRequired,
  loginVisibile: PropTypes.bool.isRequired,
  loginHandler: PropTypes.func.isRequired,
  logoutHandler: PropTypes.func.isRequired,
};

export default DropDownMenu;
