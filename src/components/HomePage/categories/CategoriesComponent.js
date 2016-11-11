import React, { PropTypes } from 'react';
import $ from 'jquery';
import CategoryItemComponent from './CategoryItemComponent';

/**
 * The state holding container for Popular Gear Items
 */
class CategoriesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories,
      categoryItems: [],
    };

    this.buildCategoryItems = this.buildCategoryItems.bind(this);
    this.modifyCategoryItemsContainer = this.modifyCategoryItemsContainer.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.categories !== this.state.categories) {
      const categoryItems = this.buildCategoryItems(newProps.categories);

      this.setState({
        categories: newProps.categories,
        categoryItems,
      });
    }
  }

  componentDidUpdate() {
    this.modifyCategoryItemsContainer();
  }

  buildCategoryItems(categories) {
    const categoryItems = [];
    if (categories.length) {
      categories.forEach((category, index) => {
        categoryItems.push(
          <CategoryItemComponent
            imgSrc={category.imgSrc}
            altText={category.altText}
            title={category.title}
            link={category.link}
            key={index}
          />
        );
      });
    }

    return categoryItems;
  }

  modifyCategoryItemsContainer() {
    if (this.props.mobile) {
      const categoryItemContainer = $('.category-item-container');
      const width = categoryItemContainer.width();
      categoryItemContainer.each((index, item) => {
        $(item).css('height', width);
      });
    }

    if (this.state.categories.length) {
      this.state.categories.forEach((category) => {
        const className = '.'.concat(category.altText);
        $(className).css('background-image', 'url(' + category.imgSrc + ')');
      });
    }
  }

  render() {
    return (
      <div className="category-container">
        <h3>Get Outdoors</h3>
        {this.state.categoryItems}
      </div>
    );
  }
}

CategoriesComponent.propTypes = {
  mobile: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesComponent;
