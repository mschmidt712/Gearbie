import React, { PropTypes } from 'react';
import Header from './shared/HeaderComponent';
import Footer from './shared/FooterComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
