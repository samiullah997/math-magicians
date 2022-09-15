import { render } from '@testing-library/react';
import Quote from '../components/Quote';

it('test Quote component', async () => {
  const tree = render(<Quote />);
  expect(tree).toMatchSnapshot();
});
