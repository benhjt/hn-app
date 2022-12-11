import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  // TODO: fix test
  it.skip('renders app', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello wortld/i);
    expect(linkElement).toBeInTheDocument();
  });
});
