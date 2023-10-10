import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FeedItem from './FeedItem';

const item = {
  id: 33934580,
  title: 'This cool story!',
  points: 54,
  user: 'username123',
  content: '<p>test test test</p>',
  time: 1670693712,
  time_ago: '8 hours ago',
  comments_count: 226,
  type: 'link',
  url: 'https://www.google.com',
  domain: 'google.com',
  comments: [],
};

describe('FeedItem', () => {
  it('renders correctly', () => {
    const { container } = render(<FeedItem item={item} index={1} />, {
      wrapper: BrowserRouter,
    });
    expect(container).toMatchSnapshot();
  });
});
