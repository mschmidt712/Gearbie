import React, { PropTypes } from 'react';

function EditButtonComponent(props) {
  return (
    <button onClick={props.clickHandler} className="edit-btn btn">
      {props.editing && <i className="material-icons">save</i>}
      {!props.editing && <i className="material-icons">edit</i>}
    </button>
  );
}

EditButtonComponent.propTypes = {
  editing: PropTypes.boolean,
  clickHandler: PropTypes.func.isRequired,
};

export default EditButtonComponent;
