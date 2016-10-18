/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

let mockProps = {
  className: '',
};
let RightArrowComponent;
let LeftArrowComponent;

test('Should: render the right arrow', (t) => {
  RightArrowComponent = shallow(<RightArrow {...mockProps} />);

  const rightArrowButton = RightArrowComponent.find('button');
  t.true(rightArrowButton.is('.explore-right-arrow-container'));
});

test('Should: render the left arrow', (t) => {
  LeftArrowComponent = shallow(<LeftArrow {...mockProps} />);

  const leftArrowButton = LeftArrowComponent.find('button');
  t.true(leftArrowButton.is('.explore-left-arrow-container'));
});

test('Should: add disabled class to arrows if disabled is included in props classname', (t) => {
  mockProps = {
    className: 'disabled',
  };

  RightArrowComponent = shallow(<RightArrow {...mockProps} />);
  LeftArrowComponent = shallow(<LeftArrow {...mockProps} />);

  t.is(RightArrowComponent.find('.arrow-disabled').length, 1);
  t.is(LeftArrowComponent.find('.arrow-disabled').length, 1);
});
