/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectPage from './ConnectPage';

let ConnectPageComponent;
const mockResults = [{
  title: {
    rendered: 'One',
  },
  content: {
    rendered: '<p>one content</p>',
  },
  acf: {
    link_url: 'http://one.com',
    link_text: 'One Link',
  },
}, {
  title: {
    rendered: 'Two',
  },
  content: {
    rendered: '<p>two content</p>',
  },
  acf: {
    link_url: 'http://two.com',
    link_text: 'Two Link',
  },
}];

test.before(() => {
  ConnectPageComponent = mount(<ConnectPage />);
});

test('spinner: should show spinner when posts loading true', (t) => {
  ConnectPageComponent.setState({
    loadingPosts: true,
  });

  const spinner = ConnectPageComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('spinner: should not show spinner when post loading false', (t) => {
  ConnectPageComponent.setState({
    loadingPosts: false,
  });

  const spinner = ConnectPageComponent.find('.loading-disabled');
  t.true(spinner.is('.loading-disabled'));
});

test('buildEventContainer: should create text box item in the state for each result', (t) => {
  ConnectPageComponent.node.buildEventContainer(mockResults);

  t.is(ConnectPageComponent.state().events.length, 2);
});

test('buildEventContainer: the text box items should be EventContainer elements', (t) => {
  ConnectPageComponent.node.buildEventContainer(mockResults);

  const eventElement1 = ConnectPageComponent.state().events[0];
  const eventElement2 = ConnectPageComponent.state().events[1];

  t.regex(eventElement1.type, new RegExp('EventContainer', 'g'));
  t.regex(eventElement2.type, new RegExp('EventContainer', 'g'));
});
