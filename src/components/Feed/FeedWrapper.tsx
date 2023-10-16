import { useParams } from 'react-router-dom';

import Spinner from '../Spinner';
import { StoryType } from '../../types';
import useFetch from 'react-fetch-hook';
import Feed from './Feed';

const FeedWrapper = ({ type }: { type: string }) => {
  const { page } = useParams<'page'>();
  const { isLoading, data, error } = useFetch<StoryType[]>(
    `https://node-hnapi.herokuapp.com/${type}?page=${page}`,
  );

  if (isLoading || !data) return <Spinner />;

  if (error) return <div>Oh no 😢</div>;

  return <Feed type={type} feed={data} page={page} />;
};

export default FeedWrapper;
