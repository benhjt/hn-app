import { render } from '@testing-library/react';

import User from './User';
import { UserType } from '../../types';

const user: UserType = {
  id: 'joebloggs123',
  created: 1640995200,
  karma: 54,
};

describe('<User />', () => {
  it('renders correctly', () => {
    const { container } = render(<User user={user} />);
    expect(container).toMatchSnapshot();
  });
});
