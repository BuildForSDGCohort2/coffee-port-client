import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { POST_REVIEW } from '../../apollo/server/mutations';
import { useParams } from 'react-router-dom';
import { CircularProgress, Grid } from '@material-ui/core';
import Comments from './comments.component';
import { Redirect } from 'react-router-dom';
import { GET_REVIEWS } from '../../apollo/server/queries';
import { logout } from '../../utils';
import { GET_COMMENTS } from '../../apollo/client/queries';
import { commentsVar } from '../../apollo/cache';

const CommentsContainer = () => {
  const { productId } = useParams();
  const { data: commentData, loading: commentLoading } = useQuery(
    GET_COMMENTS,
  );
  const [postReview, { data, loading }] = useMutation(POST_REVIEW);
  const { data: reviewData, loading: reviewLoading } = useQuery(
    GET_REVIEWS,
    {
      variables: { productId },
    },
  );
  useEffect(() => {
    if (!data) {
      commentsVar({
        ...commentsVar(),
        comments: reviewData.product.reviews,
      });
    } else {
      const { id, comment, reviewerEmail } = data.postProductReview;
      commentsVar({
        ...commentsVar(),
        comments: [
          { id, comment, reviewerEmail },
          ...reviewData.product.reviews,
        ],
      });
    }
  }, [reviewLoading, reviewData.product.reviews, data]);

  if (loading || commentLoading) {
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    );
  }

  if (!data && !loading && !POST_REVIEW) {
    return <Redirect to="/error" />;
  }
  if (data) {
    if (data.postProductReview.__typename === 'Review') {
    }
    if (
      data.postProductReview.__typename ===
      ' NotAuthenticatedUserError'
    ) {
      logout();
    }
  }

  if (!reviewLoading) {
    return (
      <Comments
        post={postReview}
        comments={commentData.comments.comments}
      />
    );
  }
};
export default CommentsContainer;
