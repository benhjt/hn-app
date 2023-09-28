import { useEffect, useState } from 'react';
import { CommentType } from '../../types';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import Separator from '../Separator';

const COLLAPSE_BUTTON_TEXT = '[-]';

const Comment = ({ comment }: { comment: CommentType }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapseButton, setCollapseButton] = useState(COLLAPSE_BUTTON_TEXT);
  const [collapseTitle, setCollapseTitle] = useState('Hide replies');
  const [commentThreadSize, setCommentThreadSize] = useState(0);

  const toggleCollapse = () => {
    const newVal = !collapsed;
    setCollapsed(newVal);
    setCollapseButton(
      newVal ? `[${commentThreadSize} more]` : COLLAPSE_BUTTON_TEXT,
    );
    setCollapseTitle(
      `${newVal ? 'Show' : 'Hide'} ${commentThreadSize} comments`,
    );
  };

  useEffect(() => {
    const _calculateThreadSize = (thread: CommentType) => {
      let threadSize = 0;

      let flat = (thread: CommentType) => {
        threadSize++;
        thread?.comments?.forEach(flat);
      };

      flat(thread);
      return threadSize;
    };

    setCommentThreadSize(_calculateThreadSize(comment));
  }, [comment]);

  return (
    <div className="pl-5">
      <div className="flex py-1 text-gray-500 text-xs">
        <Link to={`/user/${comment.user}`} className="hover:underline">
          {comment.user}
        </Link>
        <span className="ml-2">{comment.time_ago}</span>
        <Separator />
        <button
          className="bg-transparent border-none cursor-pointer p-0 select-none"
          onClick={toggleCollapse}
          aria-label={collapseTitle}
        >
          {collapseButton}
        </button>
      </div>
      {collapsed ? (
        ''
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
          <Comments comments={comment.comments} />
        </>
      )}
    </div>
  );
};

export default Comment;
