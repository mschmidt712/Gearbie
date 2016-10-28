/* eslint import/no-extraneous-dependencies: 0 */

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFoundComponent';

let PageNotFoundComponent;

test.before(() => {
  PageNotFoundComponent = shallow(<PageNotFound />);
});

test('Should: generate the component', (t) => {
  t.is(PageNotFoundComponent.length, 1);
  t.is(PageNotFoundComponent.type(), 'div');
});
