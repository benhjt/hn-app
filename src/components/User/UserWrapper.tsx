import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import User from './User';
import { UserType } from '../../types';
import Spinner from '../Spinner';

const UserWrapper = () => {
  const { username } = useParams<'username'>();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${username}.json`,
      );
      const userData = await response.json();
      setUser(userData);
      setIsLoading(false);
    };

    fetchData();
  }, [username]);

  return (
    <div>{isLoading ? <Spinner /> : user ? <User user={user} /> : ''}</div>
  );
};

export default UserWrapper;
