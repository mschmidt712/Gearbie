import React, { PropTypes } from 'react';
import InfoItemComponent from './InfoItemComponent';
import EditButtonComponent from './EditButtonComponent';

function AccountInfoComponent(props) {
  return (
    <div className="account-info-container info-container clearfix">
      <h4> Account Info </h4>
      <EditButtonComponent clickHandler={props.editClickHandler} />
      <div className="account-info-content">
        <img src={props.user.imgSrc} alt="user" />
        <div className="account-properties">
          <div className="info-item">
            <label htmlFor="username">Username</label>
            <InfoItemComponent
              id="username"
              value={props.user.username}
              editing={props.editing}
              onChange={props.inputOnChange}
            />
          </div>
          <div className="info-item">
            <label htmlFor="email">Email</label>
            <InfoItemComponent
              id="email"
              value={props.user.email}
              editing={props.editing}
              onChange={props.inputOnChange}
            />
          </div>
          <button className="btn btn-secondary" onClick={props.updatePasswordClickHandler}>
            Change Your Password
          </button>
        </div>
      </div>
    </div>
  );
}

AccountInfoComponent.propTypes = {
  user: PropTypes.shape({
    imgSrc: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
  }),
  editing: PropTypes.bool.isRequired,
  editClickHandler: PropTypes.func.isRequired,
  updatePasswordClickHandler: PropTypes.func.isRequired,
  inputOnChange: PropTypes.func.isRequired,
};

export default AccountInfoComponent;
