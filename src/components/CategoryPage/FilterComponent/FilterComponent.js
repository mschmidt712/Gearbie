import React, { PropTypes } from 'react';
import $ from 'jquery';
import { ionRangeSlider } from 'ion-rangeslider';
import FilterItemRadioComponent from './FilterItemRadioComponent';
import FilterItemComponent from './FilterItemComponent';

const filters = [{
  label: 'Size',
  id: 'size',
  optionType: 'dropdown',
  options: [
    '', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large',
  ],
}, {
  label: 'Brand',
  id: 'brand',
  optionType: 'input',
}, {
  label: 'Adjustable',
  id: 'adjustable',
  optionType: 'radio',
  options: ['Yes', 'No'],
}, {
  label: 'Price',
  id: 'price',
  optionType: 'range',
  options: {
    min: 0,
    max: 1000,
    step: 50,
  },
}, {
  label: 'Deposit',
  id: 'deposit',
  optionType: 'range',
  options: {
    min: 0,
    max: 1000,
    step: 50,
  },
}];

class FilterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRadioItems: [],
      filterItems: [],
      filters: {},
      mobile: this.props.mobile,
    };

    this.initFilters = this.initFilters.bind(this);
    this.buildFilterRadioItems = this.buildFilterRadioItems.bind(this);
    this.buildFilterItems = this.buildFilterItems.bind(this);
    this.buildScreenFilterItems = this.buildScreenFilterItems.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.checkFilterState = this.checkFilterState.bind(this);
    // this.searchMobile = this.searchMobile.bind(this);
    this.search = this.search.bind(this);
  }

  componentWillMount() {
    this.initFilters();

    if (this.state.mobile) {
      this.buildFilterRadioItems();
      this.buildFilterItems();
    } else {
      this.buildScreenFilterItems();
    }
  }

  componentDidMount() {
    filters.forEach((filter) => {
      if (filter.optionType === 'range') {
        $('.slider#'.concat(filter.id)).ionRangeSlider({
          min: filter.options.min,
          max: filter.options.max,
          step: 10,
          prefix: '$',
          type: 'double',
        });
      }
    });
  }

  initFilters() {
    const initFilters = {};

    filters.forEach((filter) => {
      initFilters[filter.id] = '';
    });

    this.setState({
      filters: initFilters,
    });
  }

  toggleDropdownIcon(ev) {
    const node = ev.target;
    $(node).children('i.add').toggle();
    $(node).children('i.remove').toggle();
  }

  buildFilterRadioItems() {
    const filterRadioItems = [];

    filters.forEach((filter, index) => {
      filterRadioItems.push(
        <FilterItemRadioComponent
          label={filter.label}
          id={filter.id}
          clickHandler={this.clickHandler}
          key={index}
        />
      );
    });

    this.setState({
      filterRadioItems,
    });
  }

  buildFilterItems() {
    const filterItems = [];

    filters.forEach((filter, index) => {
      filterItems.push(
        <FilterItemComponent
          label={filter.label}
          id={filter.id}
          optionType={filter.optionType}
          options={filter.options}
          clickHandler={this.clickHandler}
          key={index}
        />
      );
    });

    this.setState({
      filterState: false,
      filterItems,
    });
  }

  buildScreenFilterItems() {
    const filterItems = [];
    filters.forEach((filter, index) => {
      filterItems.push(
        <div className="screen-filter-item" key={index}>
          <button
            onClick={(ev) => { this.clickHandler(filter.id); this.toggleDropdownIcon(ev); }}
            className="filter-expand-btn"
          > {filter.label}
            <i className="material-icons add">add</i>
            <i className="material-icons remove">remove</i>
          </button>
          <FilterItemComponent
            id={filter.id}
            optionType={filter.optionType}
            options={filter.options}
            clickHandler={this.clickHandler}
          />
        </div>
      );
    });

    this.setState({
      filterItems,
    });
  }

  clickHandler(id) {
    $('.filter-option-container.'.concat(id)).toggle();

    this.checkFilterState();
  }

  checkFilterState() {
    let filterState = false;
    $('.filter-item-container input').each((index, item) => {
      if (item.checked) {
        filterState = true;
      }
    });

    this.setState({
      filterState,
    });
  }

  search() {
    const newFilters = this.state.filters;

    filters.forEach((filterItem) => {
      const id = filterItem.id;
      let value;
      switch (filterItem.optionType) {
        case 'radio': {
          const buttons = $('.filter-option-container input[name="'.concat(id, '"]'));
          buttons.each((index, button) => {
            if (button.checked) {
              value = $(button).attr('id');
            }
          });
          break;
        }
        case 'dropdown': {
          const select = $('.filter-option-container select#'.concat(id));
          value = select.val();
          break;
        }
        default: {
          const input = $('filter-option-container input#'.concat(id));
          value = input.val();
          break;
        }
      }

      newFilters[id] = value;
    });

    this.props.toggleFilters();
    this.setState({
      filters: newFilters,
    });
  }

  render() {
    let component;

    if (this.state.mobile) {
      component = (<div className="filter-component-container">
        <div className="filter-checkbox-container">
          {this.state.filterRadioItems}
        </div>
        <div className="filter-options-container">
          {this.state.filterItems}
        </div>
        {this.state.filterState &&
          <button className="btn btn-primary search-btn" onClick={this.search}>Search</button>}
      </div>);
    } else {
      component = (<div className="filter-component-container">
        {this.state.filterItems}
        <button className="btn btn-primary search-btn" onClick={this.search}>Search</button>
      </div>);
    }
    return component;
  }
}

FilterComponent.propTypes = {
  mobile: PropTypes.bool.isRequired,
  toggleFilters: PropTypes.func,
};

export default FilterComponent;
