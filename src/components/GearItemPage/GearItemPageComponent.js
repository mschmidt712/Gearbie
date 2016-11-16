import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import toastr from 'toastr';
import * as itemActions from '../../actions/itemActions';
import GearItemHeaderComponent from './GearItemHeaderComponent/GearItemHeaderComponent';
import BookingComponent from './BookingComponent/BookingComponent';
import UserDescriptionComponent from './UserDescriptionComponent/UserDescriptionComponent';
import GearPropertyComponent from './GearPropertyComponent/GearPropertyComponent';
import LoadingComponent from '../shared/LoadingComponent/LoadingComponent';
import LoginComponent from '../LoginComponent/LoginComponent';
import DimmerComponent from '../shared/DimmerComponent/DimmerComponent';

class GearItemPageComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      gearItemId: props.params.gearItemId,
      gearItem: {},
      properties: [],
      loading: false,
      bookingStart: moment(),
      bookingEnd: moment().add(1, 'days'),
      loginVisible: false,
    };

    this.buildGearProperties = this.buildGearProperties.bind(this);
    this.bookingRedirect = this.bookingRedirect.bind(this);
    this.bookingSubmitHandler = this.bookingSubmitHandler.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });

    this.props.actions.getItemById(this.state.gearItemId)
      .then((resp) => {
        const gearItem = resp.itemById;
        const properties = this.buildGearProperties(gearItem);

        this.setState({
          gearItem,
          properties,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
        toastr.error(err);
      });
  }

  buildGearProperties(gearItem) {
    const properties = [];

    if (gearItem.properties) {
      gearItem.properties.forEach((property, index) => {
        properties.push(<GearPropertyComponent
          title={property.title}
          description={property.description}
          type={property.type}
          key={index}
        />);
      });
    }

    return properties;
  }

  bookingRedirect(gearItemId, startDate, endDate) {
    this.context.router.push({
      pathname: `/booking/${gearItemId}`,
      query: {
        startDate,
        endDate,
      },
    });
  }

  bookingSubmitHandler(gearItemId, startDate, endDate) {
    if (this.props.user.username) {
      this.bookingRedirect(gearItemId, startDate, endDate);
    } else {
      this.setState({
        loginVisible: true,
      });
    }
  }

  toggleLogin() {
    this.setState({
      loginVisible: !this.state.loginVisible,
    });
  }

  render() {
    return (
      <div className="gear-item-page-container page-container">
        <LoadingComponent loading={this.state.loading} />
        {this.state.loginVisible &&
          <div>
            <LoginComponent loginVisible={this.toggleLogin} />
            <DimmerComponent className="dimmer" clickHandler={this.toggleLogin} />
          </div>
        }
        {!this.state.loading &&
          <div>
            <div className="gear-item-header clearfix">
              <GearItemHeaderComponent gearItem={this.state.gearItem} />
              <BookingComponent
                gearItemId={this.state.gearItemId}
                bookingStart={this.state.bookingStart}
                bookingEnd={this.state.bookingEnd}
                submitHandler={this.bookingSubmitHandler}
              />
            </div>
            <UserDescriptionComponent user={this.state.gearItem.owner} />
            <div className="properties-container clearfix">
              {this.state.properties}
            </div>
          </div>
        }
      </div>
    );
  }
}

GearItemPageComponent.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
  gearItem: PropTypes.object,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

GearItemPageComponent.contextTypes = {
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
    actions: bindActionCreators(itemActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GearItemPageComponent);
