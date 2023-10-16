import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Story from './Story';
import { StoryType } from '../../types';

const story: StoryType = {
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
};

describe('<Story />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Story story={story} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
