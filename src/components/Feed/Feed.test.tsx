import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Feed from './Feed';
import { StoryType } from '../../types';

const feed: StoryType[] = [
  {
    id: 37898999,
    title: 'Better HTTP server routing in Go 1.22',
    points: 173,
    user: 'ingve',
    time: 1697459894,
    time_ago: '4 hours ago',
    type: 'link',
    url: 'https://eli.thegreenplace.net/2023/better-http-server-routing-in-go-122/',
    domain: 'eli.thegreenplace.net',
    comments: [],
    comments_count: 97,
    content: '',
  },
];

describe('<Feed />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Feed feed={feed} type="news" page="1" />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
