/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import TextBoxContainer from './TextBoxContainer';

let TextBoxComponent;
const mockData = {
  title: '1',
  text: 'one',
  link: 'http://one.com',
  linkText: 'one link',
};

test.before(() => {
  TextBoxComponent = shallow(<TextBoxContainer
    title={mockData.title}
    text={mockData.text}
    link={mockData.link}
    linkText={mockData.linkText}
    key="0"
  />);
});

test('Should: set the text box header, content, link, and link text from the data passed in', (t) => {
  const textBoxHeader = TextBoxComponent.find('.text-box-header');
  const textBoxContent = TextBoxComponent.find('.text-box-content');
  const textBoxLink = TextBoxComponent.find('.page-description-link').props();
  const textBoxLinkText = TextBoxComponent.find('.page-description-link-text');

  t.is(textBoxHeader.render().text(), mockData.title);
  t.is(textBoxContent.render().text(), mockData.text);
  t.is(textBoxLink.href, mockData.link);
  t.is(textBoxLinkText.render().text(), mockData.linkText);
});
