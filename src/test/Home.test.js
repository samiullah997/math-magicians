import { render } from '@testing-library/react';
import Home from '../components/Home';

it('test home component', async () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
