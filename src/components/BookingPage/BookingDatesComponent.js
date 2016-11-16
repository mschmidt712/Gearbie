import React, { PropTypes } from 'react';
import { DateRangePicker } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import moment from 'moment';

function BookingDatesComponent(props) {
  return (
    <div className="item-container-box booking-dates-container clearfix">
      <h3> Booking Dates </h3>
      <DateRangePicker
        id="booking_dates_input"
        focused={null}
        startDate={props.bookingStart}
        endDate={props.bookingEnd}
      />
    </div>
  );
}

BookingDatesComponent.propTypes = {
  bookingStart: PropTypes.instanceOf(moment).isRequired,
  bookingEnd: PropTypes.instanceOf(moment).isRequired,
};

export default BookingDatesComponent;
