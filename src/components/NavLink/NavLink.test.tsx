import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import NavLink from './NavLink';

describe('NavLink', () => {
  it('renders correctly', () => {
    const { container } = render(<NavLink to="/news/1">Top</NavLink>, {
      wrapper: BrowserRouter,
    });
    expect(container).toMatchSnapshot();
  });

  it('renders correctly when link is selected', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/news/1']}>
        <NavLink to="/news/1">Top</NavLink>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
