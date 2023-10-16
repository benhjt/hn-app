import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Comment from './Comment';
import { CommentType } from '../../types';

const comment: CommentType = {
  id: 37898999,
  level: 1,
  user: 'ingve',
  time: 1697459894,
  time_ago: '4 hours ago',
  content: 'hello',
};

describe('<Comment />>', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Router>
        <Comment comment={comment} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
