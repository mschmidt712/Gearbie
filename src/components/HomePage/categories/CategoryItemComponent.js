import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * The stateless component for building gear items
 */
function CategoryItemComponent(props) {
  const classNames = 'category-item-container '.concat(props.altText);
  return (
    <div className={classNames}>
      <Link to={props.link}>
        <h5>{props.title}</h5>
      </Link>
    </div>
  );
}

CategoryItemComponent.propTypes = {
  /**
   * The alternate text for the gear image
   */
  altText: PropTypes.string.isRequired,
  /**
   * The title to be displayed for the gear
   */
  title: PropTypes.string.isRequired,
  /**
   * The link adress to the category page
   */
  link: PropTypes.string.isRequired,
};

export default CategoryItemComponent;
