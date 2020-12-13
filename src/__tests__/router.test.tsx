import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Routes from '~/router';

// test('renders learn react link', () => {
//   render(<Routes />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const component = shallow(<Routes />);
});
