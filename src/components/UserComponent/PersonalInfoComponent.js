import React, { PropTypes } from 'react';
import InfoItemComponent from './InfoItemComponent';
import EditButtonComponent from './EditButtonComponent';

function PersonalInfoComponent(props) {
  return (
    <div className="personal-info-container info-container">
      <h4>Personal Info</h4>
      <EditButtonComponent clickHandler={props.editClickHandler} />
      <div className="info-item">
        <label htmlFor="fullName">Full Name</label>
        <InfoItemComponent
          value={props.user.fullName}
          id="fullName"
          editing={props.editing}
          onChange={props.inputOnChange}
        />
      </div>
      <div className="info-item">
        <label htmlFor="street">Street Address</label>
        <InfoItemComponent
          value={props.user.street}
          id="street"
          editing={props.editing}
          onChange={props.inputOnChange}
        />
      </div>
      <div className="info-item">
        <label htmlFor="city">City</label>
        <InfoItemComponent
          value={props.user.city}
          id="city"
          editing={props.editing}
          onChange={props.inputOnChange}
        />
      </div>
      <div className="info-item">
        <label htmlFor="state">State</label>
        <InfoItemComponent
          value={props.user.state}
          id="state"
          editing={props.editing}
          onChange={props.inputOnChange}
        />
      </div>
      <div className="info-item">
        <label htmlFor="zipCode">Zip Code</label>
        <InfoItemComponent
          value={props.user.zipCode}
          id="zipCode"
          editing={props.editing}
          onChange={props.inputOnChange}
        />
      </div>
    </div>
  );
}

PersonalInfoComponent.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.number,
  }).isRequired,
  editing: PropTypes.bool.isRequired,
  editClickHandler: PropTypes.func.isRequired,
  inputOnChange: PropTypes.func.isRequired,
};

export default PersonalInfoComponent;
