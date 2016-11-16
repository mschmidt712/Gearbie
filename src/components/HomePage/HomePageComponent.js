import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';
import SearchComponent from '../shared/SearchComponent/SearchComponent';
import CategoriesComponent from './categories/CategoriesComponent';
import NearbyComponent from './nearby/NearbyComponent';
import PopularComponent from './popular/PopularComponent';

/**
 * The Home Page View Component
 */
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      categories: this.props.categories,
      nearbyGearItems: this.props.nearbyGearItems,
      mobile: true,
      zipCode: 80205,
    };

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.searchByZipCode = this.searchByZipCode.bind(this);
  }

  componentWillMount() {
    this.props.itemActions.getNearbyItems(this.state.zipCode)
      .then((resp) => {
        this.setState({
          nearbyGearItems: resp.nearbyItems,
        });
      });

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
    console.log(newProps);

    if (newProps.user.zipCode !== this.state.zipCode && newProps.user.zipCode > 0) {
      this.props.itemActions.getNearbyItems(newProps.user.zipCode)
        .then((resp) => {
          this.setState({
            zipCode: newProps.user.zipCode,
            nearbyGearItems: resp.nearbyItems,
          });
        });
    }
    if (newProps.categories !== this.state.categories) {
      this.setState({
        categories: newProps.categories,
      });
    }
  }

  searchByZipCode(zipCode) {
    this.props.itemActions.getNearbyItems(zipCode)
      .then((resp) => {
        this.setState({
          zipCode,
          nearbyGearItems: resp.nearbyItems,
        });
      });
  }

  render() {
    return (<div className="page-container">
      <CategoriesComponent mobile={this.state.mobile} categories={this.state.categories} />
      <NearbyComponent
        zipCode={this.state.zipCode}
        nearbyGearItems={this.state.nearbyGearItems}
        searchHandler={this.searchByZipCode}
      />
      <PopularComponent />
    </div>);
  }
}

HomePage.propTypes = {
  user: PropTypes.shape({
    zipCode: PropTypes.number,
  }),
  categories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  nearbyGearItems: PropTypes.arrayOf(PropTypes.object),
  itemActions: PropTypes.objectOf(PropTypes.func),
};

function mapStateToProps(state) {
  return {
    user: state.user,
    nearbyGearItems: state.nearbyItems,
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemActions: bindActionCreators(itemActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
