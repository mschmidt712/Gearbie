import React, { PropTypes } from 'react';
import { DateTimePicker } from 'react-widgets';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import Moment from 'moment';

momentLocalizer(Moment);

/**
 * The stateless component for booking inputs
 */
function BookingComponent(props) {
  return (
    <div className="booking-component-container">
      <div className="booking-date-container clearfix">
        <h5>Book It</h5>
        <div className="booking-input">
          <label htmlFor="booking-to"> To </label>
          <DateTimePicker defaultValue={new Date()} time={false} id="booking-to" />
        </div>
        <div className="booking-input">
          <label htmlFor="booking-from"> From </label>
          <DateTimePicker defaultValue={new Date()} time={false} id="booking-from" />
        </div>
      </div>
      <button className="btn btn-primary book-btn">Book Now</button>
    </div>
  );
}

BookingComponent.propTypes = {
  price: PropTypes.number.isRequired,
};

export default BookingComponent;
