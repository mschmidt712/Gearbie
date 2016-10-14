/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import KenzanAboutPage from './KenzanAboutPage';

let KenzanAboutComponent;
const mockState = {
  header: 'Kenzan About Header',
  description: 'Kenzan About description',
};
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
  KenzanAboutComponent = shallow(<KenzanAboutPage />);
});

test('spinner: should show spinner when heading and posts loading true', (t) => {
  KenzanAboutComponent.setState({
    loadingHeading: true,
    loadingPosts: true,
  });

  const spinner = KenzanAboutComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('spinner: should show spinner when heading loading true', (t) => {
  KenzanAboutComponent.setState({
    loadingHeading: true,
    loadingPosts: false,
  });

  const spinner = KenzanAboutComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('spinner: should show spinner when posts loading true', (t) => {
  KenzanAboutComponent.setState({
    loadingHeading: false,
    loadingPosts: true,
  });

  const spinner = KenzanAboutComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('spinner: should not show spinner when heading and posts loading false', (t) => {
  KenzanAboutComponent.setState({
    loadingHeading: false,
    loadingPosts: false,
  });

  const spinner = KenzanAboutComponent.find('.loading-disabled');
  t.true(spinner.is('.loading-disabled'));
});

test('Should: populate header and description from state', (t) => {
  KenzanAboutComponent.setState({
    header: mockState.header,
    description: mockState.description,
  });

  const header = KenzanAboutComponent.find('.page-header');
  const description = KenzanAboutComponent.find('.page-description');
  t.is(header.render().text(), mockState.header);
  t.is(description.render().text(), mockState.description);
});

test('buildTextBoxContainer: should create text box item in the state for each result', (t) => {
  KenzanAboutComponent.instance().buildTextBoxContainer(mockResults);

  t.is(KenzanAboutComponent.state().textBoxItems.length, 2);
});

test('buildTextBoxContainer: the text box items should be TextBoxContainer elements', (t) => {
  KenzanAboutComponent.instance().buildTextBoxContainer(mockResults);

  const textBoxElement1 = KenzanAboutComponent.state().textBoxItems[0];
  const textBoxElement2 = KenzanAboutComponent.state().textBoxItems[1];

  t.regex(textBoxElement1.type, new RegExp('TextBoxContainer', 'g'));
  t.regex(textBoxElement2.type, new RegExp('TextBoxContainer', 'g'));
});
