import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class UserDescriptionComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerVisible: false,
    };

    this.toggleOwnerContent = this.toggleOwnerContent.bind(this);
  }

  toggleOwnerContent() {
    this.setState({
      ownerVisible: !this.state.ownerVisible,
    });
  }

  render() {
    return (
      <div className="user-container clearfix">
        <button className="owner-description" onClick={this.toggleOwnerContent}>
          Meet the Owner
          {!this.state.ownerVisible && <i className="material-icons">add</i>}
          {this.state.ownerVisible && <i className="material-icons">remove</i>}
        </button>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
        {this.state.ownerVisible &&
          <div className="user-img-container">
            <p><img src={this.props.user.imgSrc} alt="owner" />
            {this.props.user.description} </p>
          </div>}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

UserDescriptionComponent.propTypes = {
  user: PropTypes.shape({
    imgSrc: PropTypes.string.isRequire,
    description: PropTypes.string.isRequire,
  }),
};

export default UserDescriptionComponent;
