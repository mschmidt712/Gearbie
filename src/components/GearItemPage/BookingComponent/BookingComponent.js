import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

/**
 * The stateless component for booking inputs
 */
class BookingComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minDate: moment(),
      maxDate: moment().add(6, 'months'),
      focusedInput: null,
      bookingStart: props.bookingStart,
      bookingEnd: props.bookingEnd,
      blockedDates: props.blockedDates,
      disabled: false,
    };

    this.onFocusChange = this.onFocusChange.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.isDayBlocked = this.isDayBlocked.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    if (!startDate || !endDate) {
      this.setState({
        disabled: true,
      });
    }

    this.setState({
      bookingStart: startDate,
      bookingEnd: endDate,
      disabled: false,
    });
  }

  onFocusChange(focusedInput) {
    this.setState({
      focusedInput,
    });
  }

  isDayBlocked(date) {
    return this.props.blockedDates.some(blockedDate => (
      date.isSame(blockedDate, 'day')
    ));
  }

  render() {
    const buttonClass = classNames({
      btn: true,
      'btn-primary': true,
      'book-btn': true,
      disabled: this.state.disabled,
    });
    const gearItemId = this.props.gearItemId;
    const startDate = moment(this.state.bookingStart).format('x');
    const endDate = moment(this.state.bookingEnd).format('x');

    return (
      <div className="booking-component-container">
        <div className="booking-date-container clearfix">
          <h5>Book It</h5>
          <DateRangePicker
            {...this.props}
            id="date_input"
            focusedInput={this.state.focusedInput}
            startDate={this.state.bookingStart}
            endDate={this.state.bookingEnd}
            onFocusChange={this.onFocusChange}
            onDatesChange={this.onDatesChange}
            numberOfMonths={1}
            enableOutsideDays
            minimumNights={1}
            isDayBlocked={this.isDayBlocked}
          />
        </div>
        <button className={buttonClass} onClick={() => this.props.submitHandler(gearItemId, startDate, endDate)}>
          Book Now
        </button>
      </div>
    );
  }
}

BookingComponent.propTypes = {
  gearItemId: PropTypes.string.isRequired,
  bookingStart: PropTypes.instanceOf(moment).isRequired,
  bookingEnd: PropTypes.instanceOf(moment).isRequired,
  blockedDates: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default BookingComponent;
