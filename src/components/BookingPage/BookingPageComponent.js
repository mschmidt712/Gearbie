import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import toastr from 'toastr';
import * as itemActions from '../../actions/itemActions';
import * as bookingActions from '../../actions/bookingActions';
import LoadingComponent from '../shared/LoadingComponent/LoadingComponent';
import BookingPageHeaderComponent from './BookingPageHeaderComponent';
import BookingDatesComponent from './BookingDatesComponent';
import PriceSummaryComponent from './PriceSummaryComponent';

function formatTimeStamp(timestamp) {
  const editedTimestamp = (timestamp.slice(0, -3)) * 1000;
  return moment(editedTimestamp);
}

function calcBookingDays(startDate, endDate) {
  return endDate.diff(startDate, 'days');
}

class BookingPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gearItemId: props.params.gearItemId,
      gearItem: {
        title: '',
        imgSrc: '',
        owner: {
          accountInfo: {
            fullName: '',
            city: '',
            state: '',
          },
        },
        properties: [],
        price: 0,
        securityDeposit: 0,
      },
      bookingStart: formatTimeStamp(props.location.query.startDate),
      bookingEnd: formatTimeStamp(props.location.query.endDate),
      bookingDays: 0,
      loading: true,
    };

    this.onBooking = this.onBooking.bind(this);
  }

  componentWillMount() {
    this.props.itemActions.getItemById(this.state.gearItemId)
      .then((resp) => {
        this.setState({
          gearItem: resp.itemById,
          loading: false,
        });
      })
      .catch((err) => {
        toastr.error(err);
        this.setState({
          loading: false,
        });
      });
  }

  onBooking() {
    this.props.bookingActions.bookItem(
      this.state.gearItemId,
      this.props.user.id,
      this.state.bookingStart,
      this.state.bookingEnd,
    ).then(() => {
      this.context.router.push(`/bookingConfirmation/${this.state.gearItemId}`);
    })
    .catch((err) => {
      toastr.error(err);
    });
  }

  render() {
    return (
      <div className="booking-page-container page-container">
        <LoadingComponent loading={this.state.loading} />
        <h2>Review your Booking</h2>
        <BookingPageHeaderComponent gearItem={this.state.gearItem} />
        <BookingDatesComponent
          bookingStart={this.state.bookingStart}
          bookingEnd={this.state.bookingEnd}
        />
        <PriceSummaryComponent
          price={this.state.gearItem.price}
          securityDeposit={this.state.gearItem.securityDeposit}
          bookingDays={calcBookingDays(this.state.bookingStart, this.state.bookingEnd)}
        />
        <button className="btn btn-primary booking-btn" onClick={this.onBooking}>Book Now</button>
      </div>
    );
  }
}

BookingPageComponent.propTypes = {
  itemActions: PropTypes.objectOf(PropTypes.func),
  bookingActions: PropTypes.objectOf(PropTypes.func),
  params: PropTypes.objectOf(PropTypes.string),
  location: PropTypes.shape({
    query: PropTypes.objectOf(PropTypes.string),
  }),
};

BookingPageComponent.contextTypes = {
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    gearItem: state.itemById,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemActions: bindActionCreators(itemActions, dispatch),
    bookingActions: bindActionCreators(bookingActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingPageComponent);
