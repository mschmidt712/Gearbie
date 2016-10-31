/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import $ from 'jquery';
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
    background_image: {
      sizes: {
        large: 'http://background_image.com/1',
      },
    },
    description: 'description1',
    header: 'Header1',
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
    background_image: {
      sizes: {
        large: 'http://background_image.com/1',
      },
    },
    description: 'description2',
    header: 'Header2',
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
    loadingCarouselPosts: true,
    loadingTextBoxPosts: true,
  });

  const spinner = KenzanAboutComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('spinner: should show spinner when heading loading true', (t) => {
  KenzanAboutComponent.setState({
    loadingHeading: true,
    loadingCarouselPosts: false,
    loadingTextBoxPosts: false,
  });

  const spinner = KenzanAboutComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('spinner: should show spinner when carousel posts loading true', (t) => {
  KenzanAboutComponent.setState({
    loadingHeading: false,
    loadingCarouselPosts: true,
    loadingTextBoxPosts: false,
  });

  const spinner = KenzanAboutComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('spinner: should show spinner when text box posts loading true', (t) => {
  KenzanAboutComponent.setState({
    loadingHeading: false,
    loadingCarouselPosts: false,
    loadingTextBoxPosts: true,
  });

  const spinner = KenzanAboutComponent.find('.loading-active');
  t.true(spinner.is('.loading-active'));
});

test('spinner: should not show spinner when heading and posts loading false', (t) => {
  KenzanAboutComponent.setState({
    loadingHeading: false,
    loadingCarouselPosts: false,
    loadingTextBoxPosts: false,
  });

  const spinner = KenzanAboutComponent.find('.loading-disabled');
  t.true(spinner.is('.loading-disabled'));
});

test('buildCarouselContainer: should create a React element for the carousel data and an array for the carousel images', (t) => {
  KenzanAboutComponent.instance().buildCarouselContainer(mockResults);
  KenzanAboutComponent.update();

  t.is(KenzanAboutComponent.state().images.length, 2);
  t.is(KenzanAboutComponent.find('AboutCarousel').length, 1);
});

test('setCarouselImages: should set a background image on the about-image-container', (t) => {
  KenzanAboutComponent = mount(<KenzanAboutPage />);
  KenzanAboutComponent.instance().buildCarouselContainer(mockResults);
  KenzanAboutComponent.update();

  const jquerySpy = sinon.spy($.prototype, 'css');
  KenzanAboutComponent.instance().setCarouselImages(mockResults);

  t.true(jquerySpy.called);
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
