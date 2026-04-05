import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders login view by default', () => {
  render(<App />);
  
  // Check for elements specific to the login view
  const loginButton = screen.getByRole('button', { name: /login/i });
  const registerLink = screen.getByText(/register/i);

  expect(loginButton).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});

test('switches to register view when register link is clicked', () => {
  render(<App />);

  const registerLink = screen.getByText(/register/i);
  fireEvent.click(registerLink);

  const registerButton = screen.getByRole('button', { name: /register/i });
  expect(registerButton).toBeInTheDocument();
});
