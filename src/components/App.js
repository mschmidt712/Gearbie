import React, { PropTypes } from 'react';
import HeaderComponent from './shared/HeaderComponent';

/**
 * The App component for the project.
 * Overarching parent component that contains all the app components.
 */
class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
    /**
   * The child elements of the app.
   */
  children: PropTypes.element.isRequired,
};

export default App;
