/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import BlogPage from './BlogPage';

let BlogPageComponent;
const mockState = {
  header: 'Blog Header',
  description: 'Blog description',
};

test.before(() => {
  BlogPageComponent = shallow(<BlogPage />);
});

test('spinner: should show spinner when heading loading true', (t) => {
  BlogPageComponent.setState({
    loadingHeading: true,
  });

  const spinner = BlogPageComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('spinner: should not show spinner when heading loading false', (t) => {
  BlogPageComponent.setState({
    loadingHeading: false,
  });

  const spinner = BlogPageComponent.find('.loading-disabled');
  t.true(spinner.is('.loading-disabled'));
});

test('Should: Populate the header and description from the state', (t) => {
  BlogPageComponent.setState({
    header: mockState.header,
    description: mockState.description,
  });

  const header = BlogPageComponent.find('.page-header');
  const description = BlogPageComponent.find('.blog-page-description');

  t.is(header.render().text(), mockState.header);
  t.is(description.render().text(), mockState.description);
});
