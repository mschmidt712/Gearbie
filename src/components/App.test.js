/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import { browserHistory } from 'react-router';
import { shallow, mount } from 'enzyme';
import App from './App';

let ShallowAppComponent;
let MountAppComponent;
let props = {
  location: {
    pathname: 'string',
  },
};
let browserHistoryStub;

test.before(() => {
  ShallowAppComponent = shallow(<App {...props} />);
  MountAppComponent = mount(<App {...props} />);
});

test.beforeEach(() => {
  browserHistoryStub = sinon.stub(browserHistory, 'push', () => {});
});

test.afterEach(() => {
  browserHistoryStub.restore();
});

// render Function
test('render: should render the app component in a div with default state', (t) => {
  t.is(ShallowAppComponent.type(), 'div');
});

// render Function
test('render: should disable transitions when mobile state true', (t) => {
  ShallowAppComponent.setState({
    mobile: true,
  });

  t.notRegex(ShallowAppComponent.text(), new RegExp('ReactCSSTransitionGroup'));
});

// render Function
test('render: should enable transitions when mobile state false', (t) => {
  ShallowAppComponent.setState({
    mobile: false,
  });

  t.regex(ShallowAppComponent.text(), new RegExp('ReactCSSTransitionGroup'));
});

// navBarClick Function
test('navBarClick: should set animation direction down on navbar click', (t) => {
  MountAppComponent.node.navBarClick({ type: 'click' });

  t.true(MountAppComponent.node.scrollDown);
});

// initiateScrollNav Function
test('initiateScrollNav: should update mobile and scrollEnabled in state', (t) => {
  MountAppComponent.node.initiateScrollNav();

  t.true(MountAppComponent.node.state.scrollEnabled);
  t.false(MountAppComponent.node.state.mobile);
});

// disableScrollNav Function
test('disableScrollNav: should update mobile and scrollEnabled in state', (t) => {
  MountAppComponent.node.disableScrollNav();

  t.false(MountAppComponent.node.state.scrollEnabled);
  t.true(MountAppComponent.node.state.mobile);
});

// setLocation Function
test('setLocation: should navigate to next page when passed next from home page', (t) => {
  props = {
    location: {
      pathname: '/',
    },
  };

  const CustomAppComponent = mount(<App {...props} />);
  CustomAppComponent.node.setLocation('next');

  t.true(browserHistoryStub.called);
});

test('setLocation: should not navigate to next page when passed next from connect page', (t) => {
  props = {
    location: {
      pathname: '/connect',
    },
  };

  const CustomAppComponent = mount(<App {...props} />);
  CustomAppComponent.node.setLocation('next');

  t.false(browserHistoryStub.called);
});

test('setLocation: should navigate to last page when passed next from connect page', (t) => {
  props = {
    location: {
      pathname: '/connect',
    },
  };

  const CustomAppComponent = mount(<App {...props} />);
  CustomAppComponent.node.setLocation('last');

  t.true(browserHistoryStub.called);
});

test('setLocation: should not navigate to last page when passed next from home page', (t) => {
  props = {
    location: {
      pathname: '/',
    },
  };

  const CustomAppComponent = mount(<App {...props} />);
  CustomAppComponent.node.setLocation('last');

  t.false(browserHistoryStub.called);
});
