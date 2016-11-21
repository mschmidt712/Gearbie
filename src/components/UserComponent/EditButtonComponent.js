import React, { PropTypes } from 'react';

function EditButtonComponent(props) {
  return (
    <button onClick={props.clickHandler} className="edit-btn btn">
      <i className="material-icons">edit</i>
    </button>
  );
}

EditButtonComponent.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default EditButtonComponent;
