import React from 'react';
import { shallow } from 'enzyme';
// import { expect } from 'chai';

import Home from '~/pages/Home';

describe('Routes component', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
    // Render a checkbox with label in the document
    // const page = shallow(<Home />);
    // expect(page.exists()).toBeTruthy();
    // const text = page.find('h1');
    // expect(text.text().toBe('Seja bem vindo ao desafio sigalei');
  });
});
