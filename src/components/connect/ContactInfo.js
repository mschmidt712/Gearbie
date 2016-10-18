import React, { PropTypes } from 'react';

/**
 * The stateless component that generates the contact info list on the connect page.
 */
function ContactInfo(props) {
  const category = props.category;
  const text = props.text;

  let linkPrefix = '';
  if (category === 'email') {
    linkPrefix = 'mailto:';
  } else if (category === 'phone') {
    linkPrefix = 'tel:+';
  }

  const href = linkPrefix.concat(text);
  return (
    <div className="col-2">
      <div className="connect-email">
        <i className="material-icons">{category}</i>
        <a href={href}>{text}</a>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
/**
 * The contact info category such as email or telephone as a string.
 */
  category: PropTypes.string.isRequired,
/**
 * The contact info text like email address or phone number as a string.
 */
  text: PropTypes.string.isRequired,
};

export default ContactInfo;
