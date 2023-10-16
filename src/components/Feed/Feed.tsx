import { Link } from 'react-router-dom';
import { FeedItem } from '../FeedItem';
import { StoryType } from '../../types';

const Feed = ({
  type,
  feed,
  page,
}: {
  type: string;
  feed: StoryType[];
  page: string | undefined;
}) => {
  const nextPage = (Number(page) || 0) + 1;
  return (
    <>
      <div className="flex flex-col gap-2">
        {feed.map((item: StoryType, index: number) => (
          <FeedItem item={item} index={index} key={item.id} />
        ))}
      </div>
      <Link to={`/${type}/${nextPage}`} className="hover:underline">
        More
      </Link>
    </>
  );
};

export default Feed;
