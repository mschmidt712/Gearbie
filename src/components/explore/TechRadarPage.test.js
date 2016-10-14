/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import TechRadarPage from './TechRadarPage';

let TechRadarComponent;
const mockState = {
  header: 'Open Source Header',
  description: 'Open Source description',
};

test.before(() => {
  TechRadarComponent = shallow(<TechRadarPage />);
});

test('Should: show spinner when heading and posts loading true', (t) => {
  TechRadarComponent.setState({
    loadingHeading: true,
    loadingPosts: true,
  });

  const spinner = TechRadarComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('Should: show spinner when heading loading true', (t) => {
  TechRadarComponent.setState({
    loadingHeading: true,
    loadingPosts: false,
  });

  const spinner = TechRadarComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('Should: show spinner when posts loading true', (t) => {
  TechRadarComponent.setState({
    loadingHeading: false,
    loadingPosts: true,
  });

  const spinner = TechRadarComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('Should: not show spinner when heading and posts loading false', (t) => {
  TechRadarComponent.setState({
    loadingHeading: false,
    loadingPosts: false,
  });

  const spinner = TechRadarComponent.find('.loading-disabled');
  t.true(spinner.is('.loading-disabled'));
});

test('Should: populate header and description from state', (t) => {
  TechRadarComponent.setState({
    header: mockState.header,
    description: mockState.description,
  });

  const header = TechRadarComponent.find('.page-header');
  const description = TechRadarComponent.find('.page-description');
  t.is(header.render().text(), mockState.header);
  t.is(description.render().text(), mockState.description);
});
