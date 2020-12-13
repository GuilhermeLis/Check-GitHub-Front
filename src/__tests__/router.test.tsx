import React from 'react';
import { shallow } from 'enzyme';

import Routes from '~/router';

// test('renders learn react link', () => {
//   render(<Routes />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Routes component', () => {
  it('renders without crashing', () => {
    shallow(<Routes />);
  });
});
