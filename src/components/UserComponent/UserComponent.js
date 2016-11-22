import React, { PropTypes } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../actions/userActions';
import LoginComponent from '../LoginComponent/LoginComponent';
import DimmerComponent from '../shared/DimmerComponent/DimmerComponent';
import AccountInfoComponent from './AccountInfoComponent';
import PersonalInfoComponent from './PersonalInfoComponent';

class UserComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      accountEditing: false,
      personalEditing: false,
      loginVisible: false,
      user: {},
    };

    this.routeToHomePage = this.routeToHomePage.bind(this);
    this.toggleAccountEditing = this.toggleAccountEditing.bind(this);
    this.togglePersonalEditing = this.togglePersonalEditing.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      user: this.props.user,
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user !== this.state.user) {
      this.setState({
        user: newProps.user,
      });
    }
  }

  routeToHomePage() {
    this.context.router.push('/');
  }

  togglePersonalEditing() {
    if (this.state.accountEditing) {
      this.props.userActions.updateUser(this.state.user);
    }

    this.setState({
      personalEditing: !this.state.personalEditing,
    });
  }

  toggleAccountEditing() {
    if (this.state.accountEditing) {
      this.props.userActions.updateUser(this.state.user);
    }

    this.setState({
      accountEditing: !this.state.accountEditing,
    });
  }

  inputOnChange(e) {
    const stateObj = Object.assign(this.state);
    const id = $(e.target).attr('id');
    const value = $(e.target).val();

    stateObj.user.accountInfo[id] = value;
    this.setState(stateObj);
  }

  render() {
    return (
      <div className="page-container user-component-container">
        {!this.state.user.accountInfo &&
          <div>
            <LoginComponent />
            <DimmerComponent className="dimmer" clickHandler={this.routeToHomePage} />
          </div>
        }
        {this.state.user.accountInfo &&
          <div>
            <h2>User Profile</h2>
            <AccountInfoComponent
              user={this.state.user.accountInfo}
              editing={this.state.accountEditing}
              editClickHandler={this.toggleAccountEditing}
              inputOnChange={this.inputOnChange}
              changePasswordClickHandler={() => {}}
            />
            <PersonalInfoComponent
              user={this.state.user.accountInfo}
              editing={this.state.personalEditing}
              editClickHandler={this.togglePersonalEditing}
              inputOnChange={this.inputOnChange}
            />
            <div className="rental-container info-container">
              <h4> Your Gear Items </h4>
            </div>
            <div className="booking-container info-container">
              <h4> Your Gear Bookings </h4>
            </div>
          </div>
        }
      </div>
    );
  }
}

UserComponent.propTypes = {
  userActions: PropTypes.objectOf(PropTypes.func).isRequired,
  user: PropTypes.shape({
    accountInfo: PropTypes.object,
  }).isRequired,
};

UserComponent.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
