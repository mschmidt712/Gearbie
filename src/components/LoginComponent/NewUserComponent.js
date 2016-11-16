import React, { PropTypes } from 'react';

function NewUserComponent(props) {
  return (
    <div className="new-user-container">
      <p> Not a User? Create an Account Below. </p>
      <button className="btn-secondary btn" id="new-account-btn">Create an Account</button>
    </div>
  );
}

NewUserComponent.propTypes = {};

export default NewUserComponent;
