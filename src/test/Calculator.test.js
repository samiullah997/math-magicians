import { render } from '@testing-library/react';
import CalculatorContainer from '../components/calculator';

it('test calculator component', () => {
  const tree = render(<CalculatorContainer />);
  expect(tree).toMatchSnapshot();
});

it('test calculator click event', async () => {
  const { getByTestId } = render(<CalculatorContainer />);

  expect(getByTestId('txt-area').textContent).toBe('0');
});
