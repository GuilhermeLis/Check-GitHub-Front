import React from 'react';
import { shallow } from 'enzyme';
// import { expect } from 'chai';

import Home from '~/pages/Home';

test('Home page', () => {
  // Render a checkbox with label in the document
  const page = shallow(<Home />);
  expect(page.exists()).toBeTruthy();
  expect(page.find('Title')).toEqual({});
});
