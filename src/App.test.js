import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders roll dice button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/roll the dice/i);
  expect(buttonElement).toBeInTheDocument();
});
