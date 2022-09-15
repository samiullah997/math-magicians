/* eslint-disable no-unused-vars */
import { render } from '@testing-library/react';
import nav from '../components/NavBar';

it('test navbar component', async () => {
  const tree = render(<nav />);
  expect(tree).toMatchSnapshot();
});
