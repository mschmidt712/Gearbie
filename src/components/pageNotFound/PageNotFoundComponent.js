import React from 'react';
import $ from 'jquery';
import classNames from 'classnames';

class PageNotFound extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      jokeVisibile: false,
    };

    this.toggleJokeVisibility = this.toggleJokeVisibility.bind(this);
    this.render = this.render.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: 'http://dynamic.xkcd.com/api-0/jsonp/comic/?callback=func',
      type: 'GET',
      crossDomain: true,
      dataType: 'jsonp',
      jsonpCallback: 'func',
      success: (results) => {
        const jokeResult = results.img;

        this.setState({
          joke: jokeResult,
        });
      },
    });
  }

  toggleJokeVisibility() {
    this.setState({
      jokeVisibile: !this.state.jokeVisibile,
    });
  }

  render() {
    const jokeClasses = classNames({
      joke: true,
      hidden: !this.state.jokeVisibile,
    });

    return (
      <div className="page-container page-not-found-container">
        <img
          src="/assets/Skull_and_Crossbones.svg"
          role="presentation"
          onClick={this.toggleJokeVisibility}
          className="skull-and-crossbones image-rotate"
        />
        <div className={jokeClasses}>
          <img
            src={this.state.joke}
            alt="XKCD Comic"
          />
        </div>
        <div className="image-shadow image-rotate-reverse" />
        <h1> Page Not Found! </h1>
        <h5> Please check the URL and try again </h5>
      </div>
    );
  }
}

export default PageNotFound;
