import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type FeedProps = {
  feedType: string;
};

const Feed: React.FC<FeedProps> = ({ feedType }) => {
  const { page } = useParams<'page'>();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/${feedType}?page=${page}`
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
        <p>Loading...</p>
      ) : (
        <>
          {data.map((item: any, index) => (
            <>{item.title}</>
          ))}
        </>
      )}
    </div>
  );
};

export default Feed;
