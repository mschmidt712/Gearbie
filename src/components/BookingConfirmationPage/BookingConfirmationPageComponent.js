import React from 'react';
import { Link } from 'react-router';

function BookingConfirmationPageComponent() {
  return (
    <div className="booking-confirmation-container page-container">
      <h1>Thank You.</h1>
      <h2>Your booking has been submitted!</h2>
      <p>A confirmation should arrive in your email shortly.</p>
      <Link to="/" className="btn btn-primary">Return to Home Page</Link>
    </div>
  );
}

// BookingConfirmationPageComponent.propTypes = {
  // myProp: PropTypes.string.isRequired
// };

export default BookingConfirmationPageComponent;
