import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './shared/HeaderComponent';

/**
 * The App component for the project.
 * Overarching parent component that contains all the app components.
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
    this.navBarClick = this.navBarClick.bind(this);
  }

  navBarClick(ev) {
    this.setState({ clicked: ev.type });
  }

  render() {
    const path = this.props.location.pathname;
    const segment = path.split('/')[1] || '';

    let app = '';

    if (this.state.clicked) {
      app = (<div>
        <Header clickEvent={this.navBarClick} />
        <ReactCSSTransitionGroup
          transitionName="pageSlider-down"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          {React.cloneElement(this.props.children, { key: segment })}
        </ReactCSSTransitionGroup>
      </div>);

      this.state.clicked = false;
    } else {
      app = (<div>
        <Header clickEvent={this.navBarClick} />
        <ReactCSSTransitionGroup
          transitionName="pageSlider-up"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          {React.cloneElement(this.props.children, { key: segment })}
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
  children: PropTypes.element.isRequired,
  /**
   * The url of the current page.
   */
  location: PropTypes.objectOf(PropTypes.any),
};

export default App;
