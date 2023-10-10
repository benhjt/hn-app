import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';
import { FeedItem } from '../FeedItem';
import { StoryType } from '../../types';
import Comments from '../Comments';

const Story = () => {
  const { id } = useParams<'id'>();
  const [isLoading, setIsLoading] = useState(false);
  const [story, setStory] = useState<StoryType>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${id}`,
      );
      const storyData = await response.json();
      setStory(storyData);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  if (isLoading || !story) return <Spinner />;

  return (
    <div>
      <FeedItem item={story} index={-1} />
      <div dangerouslySetInnerHTML={{ __html: story.content }}></div>
      <Comments comments={story.comments} />
    </div>
  );
};

export default Story;
