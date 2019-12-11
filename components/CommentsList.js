import { Fragment } from 'react';
import Comment from './Comment';

const CommentsList = ({ comments }) => (
  <div className={'comment-list'}>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
    <style jsx>{`
      .comment-list {
        padding: 0 1em;
      }
    `}</style>
  </div>
);

export default CommentsList;
