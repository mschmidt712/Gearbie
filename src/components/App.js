import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import * as categoryActions from '../actions/categoryActions';
import HeaderComponent from './shared/HeaderComponent/HeaderComponent';
import FooterComponent from './shared/FooterComponent/FooterComponent';

/**
 * The App component for the project.
 * Overarching parent component that contains all the app components.
 * Handles page animations and scroll animations.
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      categories: this.props.categories,
    };
  }

  componentWillMount() {
    this.props.categoryActions.getAllCategories();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      categories: newProps.categories,
    });
  }

  render() {
    const path = this.props.location.pathname;
    const segment = path.split('/')[1] || '';
    const newChildren = React.Children.map(this.props.children, child => (
      React.cloneElement(child,
      { key: segment, user: this.state.user, categories: this.state.categories })
    ));

    return (<div>
      <HeaderComponent user={this.state.user} />
      {newChildren}
      <FooterComponent />
    </div>);
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
  /**
   * The url of the current page.
   */
  categories: PropTypes.arrayOf(PropTypes.object),
  /**
   * Redux category actions
   */
  categoryActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    categoryActions: bindActionCreators(categoryActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
