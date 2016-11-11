import React, { PropTypes } from 'react';
import $ from 'jquery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FilterComponent from './FilterComponent/FilterComponent';
import GearItemComponent from '../shared/GearItemComponent/GearItemComponent';
import constants from '../constants';

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gearItems: [],
      category: constants.upperCaseFormat(this.props.params.gearCat),
      mobile: true,
      filtersVisibile: false,
    };

    this.buildGearItems = this.buildGearItems.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
  }

  componentWillMount() {
    this.buildGearItems();

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

  componentDidMount() {
    const gearItemContainer = $('.gear-item-container');
    const width = gearItemContainer.width();
    gearItemContainer.each((index, item) => {
      $(item).css('height', width);
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      category: constants.upperCaseFormat(newProps.params.gearCat),
    });
  }

  buildGearItems() {
    const gearItems = [];

    constants.gearItems.forEach((item, index) => {
      gearItems.push(
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

    this.setState({
      gearItems,
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
        <h2>{this.state.category}</h2>
        {!this.state.mobile &&
          <div>
            <button className="filters-link btn btn-secondary" onClick={this.toggleFilters}>Filters
              {!this.state.filtersVisibile &&
                <div>
                  <i className="material-icons">keyboard_arrow_right</i>
                  <i className="material-icons arrow-2">keyboard_arrow_right</i>
                </div>}
              {this.state.filtersVisibile &&
                <div>
                  <i className="material-icons">keyboard_arrow_left</i>
                  <i className="material-icons arrow-2">keyboard_arrow_left</i>
                </div>}
            </button>
            <ReactCSSTransitionGroup
              transitionName="slide-right"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {this.state.filtersVisibile &&
                <div>
                  <FilterComponent category={this.state.category} mobile={this.state.mobile} toggleFilters={this.toggleFilters} />
                  <div className="filter-dimmer" onClick={this.toggleFilters} />
                </div>
              }
            </ReactCSSTransitionGroup>
          </div>
        }
        {this.state.mobile &&
          <FilterComponent category={this.state.category} mobile={this.state.mobile} />}
        <div className="gear-item-box">
          {this.state.gearItems}
        </div>
      </div>
    );
  }
}

CategoryComponent.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
};

export default CategoryComponent;
