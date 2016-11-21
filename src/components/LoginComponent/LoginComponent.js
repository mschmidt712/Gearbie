import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import toastr from 'toastr';
import * as userActions from '../../actions/userActions';
import LoginInputComponent from './LoginInputComponent';
import NewUserComponent from './NewUserComponent';
import LoadingComponent from '../shared/LoadingComponent/LoadingComponent';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: this.props.username,
        password: this.props.password,
      },
      loading: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onInputChange(e) {
    const id = $(e.target).attr('id');
    const value = e.target.value;
    const newState = Object.assign({}, this.state);
    newState.user[id] = value;
    this.setState(newState);
  }

  onLogin() {
    this.setState({
      loading: true,
    });
    this.props.actions.loginUser(this.state.user)
    .then(() => {
      toastr.success(`Welcome ${this.state.user.username}! You are now logged in.`);
      this.setState({
        loading: false,
      });
      this.props.loginVisible();
    })
    .catch((err) => {
      toastr.error(err);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    return (<div className="login-container">
      <LoadingComponent loading={this.state.loading} />
      <LoginInputComponent
        username={this.state.username}
        password={this.state.password}
        onChangeHandler={this.onInputChange}
        onLoginHandler={this.onLogin}
      />
      <NewUserComponent />
    </div>);
  }
}

LoginComponent.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  loginVisible: PropTypes.func,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
