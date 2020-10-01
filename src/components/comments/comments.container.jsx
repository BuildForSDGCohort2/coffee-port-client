import React from 'react';
import { useMutation } from '@apollo/client';
import { POST_REVIEW } from '../../apollo/server/mutations';
import Comments from './comments.component';

const CommentsContainer = ({comments}) => {
  const [postReview, { data, loading, error }] = useMutation(
    POST_REVIEW,
  );
  console.log(data,loading,error);
  return <Comments post={postReview} comments={comments}/>;
};
export default CommentsContainer;
