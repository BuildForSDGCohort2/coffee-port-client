import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { POST_REVIEW } from '../../apollo/server/mutations';
import { useParams } from 'react-router-dom';
import Comments from './comments.component';
import { Redirect } from 'react-router-dom';
import { GET_REVIEWS } from '../../apollo/server/queries';
import { logout } from '../../utils';

const CommentsContainer = () => {
  const { productId } = useParams();
  const { data: reviewData, loading: reviewLoading } = useQuery(
    GET_REVIEWS,
    {
      variables: { productId },
    },
  );

  const [postReview, { data, loading }] = useMutation(POST_REVIEW);
  console.log(data);
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
        comments={reviewData.product.reviews}
      />
    );
  }
};
export default CommentsContainer;
