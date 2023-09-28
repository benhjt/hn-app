import { CommentType } from '../../types';
import Comment from './Comment';

const Comments = ({
  comments,
}: {
  comments: Array<CommentType> | undefined;
}) => {
  return (
    <div>
      {comments?.map((comment: CommentType) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
