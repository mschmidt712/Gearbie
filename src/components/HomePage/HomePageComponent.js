import React, { PropTypes } from 'react';
import SearchComponent from '../shared/SearchComponent/SearchComponent';
import CategoriesComponent from './categories/CategoriesComponent';
import NearbyComponent from './nearby/NearbyComponent';
import PopularComponent from './popular/PopularComponent';

/**
 * The Home Page View Component
 */
class HomePage extends React.Component {
  constructor(props) {
    console.log(props);

    super(props);
    this.state = {
      categories: this.props.categories,
      zipCode: this.props.user.zipCode || undefined,
    };

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillMount() {
    const screenWidth = window.innerWidth;
    let mobile = true;

    if (screenWidth > 750) {
      mobile = false;
    }

    this.setState({
      mobile,
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.zipCode !== this.state.zipCode) {
      this.setState({
        zipCode: this.newProps.user.zipCode,
      });
    }
    if (newProps.categories !== this.state.categories) {
      this.setState({
        categories: newProps.categories,
      });
    }
  }

  render() {
    console.log('render');

    return (<div className="page-container">
      <SearchComponent />
      <CategoriesComponent mobile={this.state.mobile} categories={this.state.categories} />
      {this.state.zipCode && <NearbyComponent zipCode={this.state.zipCode} />}
      {!this.state.zipCode && <PopularComponent />}
    </div>);
  }
}

HomePage.propTypes = {
  user: PropTypes.shape({
    zipCode: PropTypes.number,
  }),
  categories: PropTypes.arrayOf(PropTypes.object),
};

export default HomePage;
