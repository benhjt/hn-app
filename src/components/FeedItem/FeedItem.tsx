import React from 'react';

import { Link } from 'react-router-dom';

export type FeedItemData = {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain: string;
};

type FeedItemProps = {
  item: FeedItemData;
  index: number;
};

export const FeedItem: React.FC<FeedItemProps> = ({ item, index }) => (
  <div>
    <div>{index}</div>
    <div>
      <div>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>{' '}
        (
        <a href={item.domain} target="_blank" rel="noopener noreferrer">
          {item.domain}
        </a>
        )
      </div>
      <div>
        {item.points} points by{' '}
        <Link to={`/user/${item.user}`}>{item.user}</Link> {item.time_ago} |{' '}
        <Link to={`/story/${item.id}`}>{item.comments_count} comments</Link>
      </div>
    </div>
  </div>
);

export default FeedItem;
