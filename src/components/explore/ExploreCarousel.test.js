/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import ExploreCarousel from './ExploreCarousel';

let ExploreCarouselComponent;
const mockData = [{
  header: '1',
  text: 'one',
}, {
  header: '2',
  text: 'two',
}];

test.before(() => {
  ExploreCarouselComponent = shallow(<ExploreCarousel data={mockData} />);
});

test('Should: create one text box component for each data item', (t) => {
  const textBoxes = ExploreCarouselComponent.find('.text-box');
  t.is(textBoxes.length, 2);
});

test('Should: set the text box header and content from the data passed in', (t) => {
  const textBoxes = ExploreCarouselComponent.find('.text-box');
  const textBox1Header = textBoxes.children('.text-box-header').first();
  const textBox1Content = textBoxes.children('p').first();

  t.is(textBox1Header.text(), mockData[0].header);
  t.is(textBox1Content.render().text(), mockData[0].text);
});
