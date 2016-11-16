import React, { PropTypes } from 'react';

function PriceSummaryComponent(props) {
  const dailyTotal = props.price * props.bookingDays;
  const fivePercent = (Math.round(dailyTotal * 0.05 * 100) / 100);
  let bookingFees;
  if (fivePercent > 10) {
    bookingFees = 10;
  } else {
    bookingFees = fivePercent;
  }

  const totalBalance = dailyTotal + bookingFees;

  return (
    <div className="item-container-box price-container clearfix">
      <h3> Rental Total </h3>
      <div className="daily-total clearfix">
        <h5> Daily Total </h5>
        <p>( ${props.price} / day </p>
        <p> x </p>
        <p> {props.bookingDays} days )</p>
        <h5 className="align-right"> ${dailyTotal} </h5>
      </div>
      <div className="fees-total clearfix">
        <h5> Booking Fees </h5>
        <h5 className="align-right"> ${bookingFees.toFixed(2)} </h5>
      </div>
      <div className="total-line" />
      <div className="total clearfix">
        <h4> Total Balance </h4>
        <h4 className="align-right"> ${totalBalance.toFixed(2)} </h4>
      </div>
      <div className="deposit-total clearfix">
        <h5> Security Deposit
          <div className="more-info">
            <i className="material-icons">info_outline</i>
            <p className="security-deposit-info"> A security deposit is collected at the time of gear pickup and refunded when the gear is returned in similar condition. This covers the items renter against any substantial damage to the equipment, loss of the gear, or theft. </p>
          </div>
        </h5>
        <h5 className="align-right"> ${(props.securityDeposit).toFixed(2)} </h5>
      </div>
    </div>
  );
}

PriceSummaryComponent.propTypes = {
  price: PropTypes.number.isRequired,
  bookingDays: PropTypes.number.isRequired,
  securityDeposit: PropTypes.number.isRequired,
};

export default PriceSummaryComponent;
