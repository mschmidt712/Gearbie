import React, { PropTypes } from 'react';

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
        <a href={href}> {text} </a>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactInfo;
