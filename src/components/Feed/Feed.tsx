import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type FeedProps = {
  feedType: string;
};

const Feed: React.FC<FeedProps> = ({ feedType }) => {
  const { page } = useParams<'page'>();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://node-hnapi.herokuapp.com/${feedType}?page=${page}`)
      .then((response) => response.json())
      .then((feedData) => {
        setData(feedData);
      });
  }, [feedType, page]);

  return (
    <div>
      {data.map((item: any, index) => (
        <>{item.title}</>
      ))}
    </div>
  );
};

export default Feed;
