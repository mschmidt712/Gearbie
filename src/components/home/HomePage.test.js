/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from './HomePage';

let HomePage;

test.before(() => {
  HomePage = shallow(<HomeComponent />);
});

test('Should: show spinner when loading true', (t) => {
  HomePage.setState({
    loadingHeading: true,
  });

  const spinner = HomePage.find('.loading-active');
  t.is(spinner.is('.loading-active'), true);
});

test('Should: hide spinner when loading false', (t) => {
  HomePage.setState({
    loadingHeading: false,
  });

  const spinner = HomePage.find('.loading-disabled');
  t.is(spinner.is('.loading-disabled'), true);
});

const mockState = {
  description: 'Page description',
};

test('Should: Populate the header, subheader, and description from the state', (t) => {
  HomePage.setState({
    description: mockState.description,
  });

  const description = HomePage.find('.home-page-description');

  t.is(description.render().text(), mockState.description);
});
