import React, { PropTypes } from 'react';
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

  componentWillReceiveProps(newProps) {
    this.setState({
      categories: newProps.categories,
    });
  }

  render() {
    return (<div>
      <HeaderComponent user={this.state.user} />
      {this.props.children}
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
};

export default App;
