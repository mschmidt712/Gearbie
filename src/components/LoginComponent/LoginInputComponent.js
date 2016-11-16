import React, { PropTypes } from 'react';

function LoginInputComponent(props) {
  return (
    <div className="login-input-container">
      <div className="input-container">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={props.username}
          onChange={props.onChangeHandler}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={props.password}
          onChange={props.onChangeHandler}
          required
        />
      </div>
      <a href="" className="forgot-password-link">Forgot your password?</a>
      <button
        className="btn-primary btn"
        id="login-btn"
        onClick={props.onLoginHandler}
      >Login</button>
    </div>
  );
}

LoginInputComponent.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  onLoginHandler: PropTypes.func.isRequired,
};

export default LoginInputComponent;
