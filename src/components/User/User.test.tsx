import { render } from '@testing-library/react';

import User from './User';

const user = {
  id: 'joebloggs123',
  created: 1640995200,
  karma: 54,
};

describe('FeedItem', () => {
  it('renders correctly', () => {
    const { container } = render(<User user={user} />);
    expect(container).toMatchSnapshot();
  });
});
