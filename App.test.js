import { render, screen } from '@testing-library/react';
import App from './App';
Promise.promisifyAll(require("mysql/lib/connection").prototype)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
  