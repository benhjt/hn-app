import { FeedItem } from '../FeedItem';
import { StoryType } from '../../types';
import Comments from '../Comments';

const Story = ({ story }: { story: StoryType }) => {
  return (
    <div>
      <FeedItem item={story} index={-1} />
      <div dangerouslySetInnerHTML={{ __html: story.content }}></div>
      <Comments comments={story.comments} />
    </div>
  );
};

export default Story;
