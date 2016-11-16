import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import toastr from 'toastr';
import * as itemActions from '../../actions/itemActions';
import FilterComponent from './FilterComponent/FilterComponent';
import FilterButtonComponent from './FilterComponent/FilterButtonComponent';
import DimmerComponent from '../shared/DimmerComponent/DimmerComponent';
import GearItemComponent from '../shared/GearItemComponent/GearItemComponent';
import constants from '../../constants';
import LoadingComponent from '../shared/LoadingComponent/LoadingComponent';

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gearItems: [],
      gearItemChildren: [],
      category: this.props.params.gearCat,
      mobile: true,
      filtersVisibile: false,
      loading: false,
    };

    this.buildGearItems = this.buildGearItems.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });

    this.props.actions.getItemsByCategory(this.state.category)
      .then((resp) => {
        const gearItemChildren = this.buildGearItems(resp.itemsByCategory);

        this.setState({
          gearItemChildren,
          loading: false,
        });

        this.formatGearItemsContainer();
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
        console.log(err);
        toastr.error(err);
      });

    const screenWidth = $(window).width();
    let mobile;
    if (screenWidth >= 1024) {
      mobile = false;
    } else {
      mobile = true;
    }

    this.setState({
      mobile,
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      loading: true,
    });

    if (newProps.params.gearCat !== this.state.category) {
      const category = newProps.params.gearCat;
      let gearItemChildren;

      this.props.actions.getItemsByCategory(newProps.params.gearCat)
        .then((resp) => {
          gearItemChildren = this.buildGearItems(resp.itemsByCategory);
          this.setState({
            category,
            gearItemChildren,
            loading: false,
          });
          this.formatGearItemsContainer();
        })
        .catch((err) => {
          this.setState({
            category,
            gearItemChildren: [],
            loading: false,
          });
          toastr.error(err);
        });
    }
  }

  buildGearItems(gearItems) {
    const children = [];

    if (gearItems.length) {
      gearItems.forEach((item, index) => {
        children.push(
          <GearItemComponent
            imgSrc={item.imgSrc}
            altText={item.altText}
            title={item.title}
            description={item.description}
            price={item.price}
            id={item.id}
            key={index}
          />);
      });
    }

    return children;
  }

  formatGearItemsContainer() {
    const gearItemContainer = $('.gear-item-container');
    const width = gearItemContainer.width();
    gearItemContainer.each((index, item) => {
      $(item).css('height', width);
    });
  }

  toggleFilters() {
    this.setState({
      filtersVisibile: !this.state.filtersVisibile,
    });
  }

  render() {
    return (
      <div className="category-page-container page-container">
        <LoadingComponent loading={this.state.loading} />
        <h2>{constants.upperCaseFormat(this.state.category)}</h2>
        {!this.state.mobile &&
          <div>
            <FilterButtonComponent filtersVisibile={this.state.filtersVisibile} clickHandler={this.toggleFilters} />
              {this.state.filtersVisibile &&
                <div>
                  <FilterComponent category={this.state.category} mobile={this.state.mobile} toggleFilters={this.toggleFilters} />
                  <DimmerComponent className="filter-dimmer" clickHandler={this.toggleFilters} />
                </div>
              }
          </div>
        }
        {this.state.mobile &&
          <FilterComponent category={this.state.category} mobile={this.state.mobile} />}
        <div className="gear-item-box">
          {this.state.gearItemChildren}
        </div>
      </div>
    );
  }
}

CategoryComponent.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

function mapStateToProps(state) {
  return {
    gearItems: state.itemsByCategory,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);
