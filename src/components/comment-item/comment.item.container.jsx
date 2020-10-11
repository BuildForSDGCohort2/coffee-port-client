import React from 'react';
import { useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { DELETE_REVIEW } from '../../apollo/server/mutations';
import GET_CURRENT_USER from '../../apollo/client/queries';
import { useQuery } from '@apollo/client';
import CommentItem from './comment-item.component';
import { GET_COMMENTS } from '../../apollo/client/queries';

import { commentsVar } from '../../apollo/cache';

const CommentItemContainer = ({ comment,counter }) => {
  const { data: currentUserData } = useQuery(GET_CURRENT_USER);
  const [deleteReview, { data, loading }] = useMutation(
    DELETE_REVIEW,
  );
  const { data: commentData, loading: commentLoading } = useQuery(
    GET_COMMENTS,
  );
  if (data && commentData && !commentLoading) {
    commentsVar({
      ...commentsVar(),
      comments: commentData.comments.comments.filter(
        (commentItem) => commentItem.id !== comment.id,
      ),
    });
  }
  if (!data && !loading && !deleteReview) {
    return <Redirect to="/error" />;
  }
  return (
    <CommentItem
      email={currentUserData.currentuser.email}
      deleteReview={deleteReview}
      comment={comment}
      loading={loading}
      counter={counter}
    />
  );
};
export default CommentItemContainer;
