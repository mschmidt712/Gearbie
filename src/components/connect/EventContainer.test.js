/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import EventContainer from './EventContainer';

let EventContainerComponent;
const mockData = {
  description: 'one',
  linkUrl: 'http://one.com',
  linkText: 'one link',
};

test.before(() => {
  EventContainerComponent = shallow(<EventContainer
    description={mockData.description}
    linkUrl={mockData.linkUrl}
    linkText={mockData.linkText}
  />);
});

test('Should: set the text box header, content, link, and link text from the data passed in', (t) => {
  const eventContent = EventContainerComponent.find('p.text-box-content');
  const eventLink = EventContainerComponent.find('.page-description-link').props();
  const eventLinkText = EventContainerComponent.find('.page-description-link-text');

  t.is(eventContent.render().text(), mockData.description);
  t.is(eventLink.href, mockData.linkUrl);
  t.is(eventLinkText.render().text(), mockData.linkText);
});
