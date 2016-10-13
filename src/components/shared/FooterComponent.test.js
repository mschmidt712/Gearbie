/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './FooterComponent';

let FooterComponent;
let mockData = {};

test('Should: render the footer text and link when display set to true', (t) => {
  mockData = {
    display: 'true',
    text: 'Footer Text',
    link: '/NextPage',
  };

  FooterComponent = mount(<Footer
    display={mockData.display}
    text={mockData.text}
    link={mockData.link}
  />);

  const footerText = FooterComponent.find('.footer-text');
  const footerLink = FooterComponent.children();

  t.is(footerText.text(), mockData.text);
  t.is(footerLink.props().to, mockData.link);
});

test('Should: render and empty div when display set to false', (t) => {
  mockData = {
    display: 'false',
  };

  FooterComponent = shallow(<Footer
    display={mockData.display}
  />);

  const footerText = FooterComponent.find('.footer-text');
  const footerLink = FooterComponent.children();

  t.is(FooterComponent.html(), '<div class=\"page-footer\"></div>');
  t.is(footerText.length, 0);
  t.is(footerLink.length, 0);
});
