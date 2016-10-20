/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import { browserHistory } from 'react-router';
import { shallow, mount } from 'enzyme';
import App from './App';

let AppComponent;
const props = {
  location: {
    pathname: 'string',
  },
};
const mockError = {
  statusText: '404',
};
let browserHistoryStub;
let toastrStub;

test.before(() => {
  AppComponent = shallow(<App {...props} />);
});

test.beforeEach(() => {
  browserHistoryStub = sinon.stub(browserHistory, 'push', () => {});
});

test.afterEach(() => {
  browserHistoryStub.restore();
});

// render Function
test('render: should render the app component in a div with default state', (t) => {
  t.is(AppComponent.type(), 'div');
});

// render Function
test('render: should disable transitions when mobile state true', (t) => {
  AppComponent.setState({
    mobile: true,
  });

  t.notRegex(AppComponent.text(), new RegExp('ReactCSSTransitionGroup'));
});

// render Function
test('render: should enable transitions when mobile state false', (t) => {
  AppComponent.setState({
    mobile: false,
  });

  t.regex(AppComponent.text(), new RegExp('ReactCSSTransitionGroup'));
});

// navBarClick Function
test('navBarClick: should set animation direction down on navbar click', (t) => {
  AppComponent.instance().navBarClick({ type: 'click' });

  t.true(AppComponent.instance().scrollDown);
});

// initiateScrollNav Function
test('initiateScrollNav: should update mobile and scrollEnabled in state', (t) => {
  AppComponent.instance().initiateScrollNav();

  t.true(AppComponent.instance().state.scrollEnabled);
  t.false(AppComponent.instance().state.mobile);
});

// disableScrollNav Function
test('disableScrollNav: should update mobile and scrollEnabled in state', (t) => {
  AppComponent.instance().disableScrollNav();

  t.false(AppComponent.instance().state.scrollEnabled);
  t.true(AppComponent.instance().state.mobile);
});

// setLocation Function
test('setLocation: should navigate to next page when passed next from home page', (t) => {
  AppComponent.instance().props.location.pathname = '/';
  AppComponent.instance().setLocation('next');

  t.true(browserHistoryStub.called);
});

test('setLocation: should not navigate to next page when passed next from connect page', (t) => {
  AppComponent.instance().props.location.pathname = '/connect/';
  AppComponent.instance().setLocation('next');

  t.false(browserHistoryStub.called);
});

test('setLocation: should navigate to last page when passed next from connect page', (t) => {
  AppComponent.instance().props.location.pathname = '/connect/';
  AppComponent.instance().setLocation('last');

  t.true(browserHistoryStub.called);
});

test('setLocation: should not navigate to last page when passed next from home page', (t) => {
  AppComponent.instance().props.location.pathname = '/';
  AppComponent.instance().setLocation('last');

  t.false(browserHistoryStub.called);
});

test('addAlert: should generate an error toastr box', (t) => {
  // Need to mount ToastContainer child to define this.toastr ref.
  const CustomAppComponent = mount(<App {...props} />);
  toastrStub = sinon.stub(CustomAppComponent.instance().toastr, 'error', () => {});

  CustomAppComponent.instance().addAlert(mockError);

  t.true(toastrStub.called);
});
