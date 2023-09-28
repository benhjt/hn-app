import { Link, useParams } from 'react-router-dom';
import Separator from '../Separator/Separator';
import { StoryType } from '../../types';

const calculateIndex = (index: number, page: string): number => {
  if (page === '1' || page === undefined) {
    return index + 1;
  } else {
    return index + 1 + (Number(page) - 1) * 30;
  }
};

export const FeedItem = ({
  item,
  index,
}: {
  item: StoryType;
  index: number;
}) => {
  const { page } = useParams<'page'>();
  return (
    <div className="flex">
      {page ? <div className="mr-1">{calculateIndex(index, page)}.</div> : ''}
      <div className="flex flex-col">
        <div className="flex flex-row align space-x-2">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="peer visited:text-gray-500"
          >
            {item.title}
          </a>
          <a
            href={item.domain}
            target="_blank"
            rel="noopener noreferrer"
            className="peer-visited:text-gray-500"
          >
            ({item.domain})
          </a>
        </div>
        <div className="flex flex-row text-gray-500 text-xs">
          {item.points} points by&nbsp;
          <Link to={`/user/${item.user}`} className="hover:underline">
            {item.user}
          </Link>
          &nbsp;
          {item.time_ago}
          <Separator />
          <Link to={`/story/${item.id}`} className="hover:underline">
            {item.comments_count} comments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
