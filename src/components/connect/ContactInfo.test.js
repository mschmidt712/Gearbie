/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import ConactInfo from './ContactInfo';

let mockData = {};
let ContactInfoComponent;

test('Should: build a email contact when passed email category', (t) => {
  mockData = {
    category: 'email',
    text: 'info@kenzan.com',
  };

  ContactInfoComponent = shallow(<ConactInfo
    category={mockData.category}
    text={mockData.text}
  />);

  const link = ContactInfoComponent.find('a');
  t.is(link.text(), mockData.text);
  t.is(link.props().href, 'mailto:'.concat(mockData.text));
});

test('Should: build a phone contact when passed phone category', (t) => {
  mockData = {
    category: 'phone',
    text: '212.239.1010',
  };

  ContactInfoComponent = shallow(<ConactInfo
    category={mockData.category}
    text={mockData.text}
  />);

  const link = ContactInfoComponent.find('a');
  t.is(link.text(), mockData.text);
  t.is(link.props().href, 'tel:+'.concat(mockData.text));
});
