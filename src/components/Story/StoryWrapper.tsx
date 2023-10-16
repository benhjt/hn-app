import { useParams } from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import Spinner from '../Spinner';
import { StoryType } from '../../types';
import Story from './Story';

const StoryWrapper = () => {
  const { id } = useParams<'id'>();
  const { isLoading, data, error } = useFetch<StoryType>(
    `https://node-hnapi.herokuapp.com/item/${id}`,
  );

  if (isLoading || !data) return <Spinner />;

  if (error) return <div>Oh no 😢</div>;

  return <Story story={data} />;
};

export default StoryWrapper;
