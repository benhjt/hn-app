import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />, { wrapper: BrowserRouter });
    expect(container).toMatchSnapshot();
  });
});
