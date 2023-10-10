import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../Spinner';
import { FeedItem } from '../FeedItem';
import { StoryType } from '../../types';

const Feed = ({ feedType }: { feedType: string }) => {
  const { page } = useParams<'page'>();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/${feedType}?page=${page}`,
      );
      const feedData = await response.json();
      setData(feedData);
      setIsLoading(false);
    };

    fetchData();
  }, [feedType, page]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-2">
          {data.map((item: StoryType, index: number) => (
            <FeedItem item={item} index={index} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
