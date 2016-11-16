import React, { PropTypes } from 'react';
import $ from 'jquery';

/**
 * The search bar for finding gear
 */

class SearchComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const value = $(e.target).val();
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div className="search-container">
        <label htmlFor="search" className="search-label">{this.props.label}</label>
        <input type={this.props.inputType} placeholder={this.props.placeholder} name="search-input" onChange={this.onInputChange} />
        <div className="button-container">
          <button type="submit" onClick={() => { this.props.clickHandler(this.state.value); }} >
            <i className="material-icons">search</i>
          </button>
        </div>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  clickHandler: PropTypes.func.isRequired,
};

export default SearchComponent;
