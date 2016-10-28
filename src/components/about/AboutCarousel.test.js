/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import AboutCarousel from './AboutCarousel';

let AboutCarouselComponent;
const mockData = [{
  header: '1',
  description: 'one',
  key: 0,
}, {
  header: '2',
  description: 'two',
  key: 1,
}];

test.before(() => {
  AboutCarouselComponent = shallow(<AboutCarousel data={mockData} />);
});

test('Should: create one text box component for each data item', (t) => {
  const carouselContainers = AboutCarouselComponent.find('.about-carousel-text');
  t.is(carouselContainers.length, 2);
});

test('Should: set the text box header and content from the data passed in', (t) => {
  const carouselContainers = AboutCarouselComponent.find('.about-carousel-text');
  const carouselHeader = carouselContainers.children('.page-header').first();
  const carouselDesription = carouselContainers.children('.page-description').first();

  t.is(carouselHeader.render().text(), mockData[0].header);
  t.is(carouselDesription.render().text(), mockData[0].description);
});

test('Should: set the text box header and content from the data passed in', (t) => {
  const carouselContainers = AboutCarouselComponent.find('.about-carousel-text');
  const carouselHeader = carouselContainers.children('.page-header').last();
  const carouselDesription = carouselContainers.children('.page-description').last();

  t.is(carouselHeader.render().text(), mockData[1].header);
  t.is(carouselDesription.render().text(), mockData[1].description);
});
