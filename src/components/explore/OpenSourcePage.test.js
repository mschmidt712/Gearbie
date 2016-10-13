/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import OpenSourcePage from './OpenSourcePage';

let OpenSourceComponent;
const mockState = {
  header: 'Open Source Header',
  description: 'Open Source description',
};

test.before(() => {
  OpenSourceComponent = shallow(<OpenSourcePage />);
});

test('Should: show spinner when heading and posts loading true', (t) => {
  OpenSourceComponent.setState({
    loadingHeading: true,
    loadingPosts: true,
  });

  const spinner = OpenSourceComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('Should: show spinner when heading loading true', (t) => {
  OpenSourceComponent.setState({
    loadingHeading: true,
    loadingPosts: false,
  });

  const spinner = OpenSourceComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('Should: show spinner when posts loading true', (t) => {
  OpenSourceComponent.setState({
    loadingHeading: false,
    loadingPosts: true,
  });

  const spinner = OpenSourceComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('Should: not show spinner when heading and posts loading false', (t) => {
  OpenSourceComponent.setState({
    loadingHeading: false,
    loadingPosts: false,
  });

  const spinner = OpenSourceComponent.find('.loading-disabled');
  t.true(spinner.is('.loading-disabled'));
});

test('Should: populate header and description from state', (t) => {
  OpenSourceComponent.setState({
    header: mockState.header,
    description: mockState.description,
  });

  const header = OpenSourceComponent.find('.page-header');
  const description = OpenSourceComponent.find('.page-description');
  t.is(header.render().text(), mockState.header);
  t.is(description.render().text(), mockState.description);
});
