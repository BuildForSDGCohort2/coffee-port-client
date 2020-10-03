import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { POST_REVIEW } from '../../apollo/server/mutations';
import { useParams } from 'react-router-dom';
import Comments from './comments.component';
import { Redirect } from 'react-router-dom';
import { GET_COMMENTS } from '../../apollo/client/queries';
import { GET_REVIEWS } from '../../apollo/server/queries';

const CommentsContainer = ({ comments }) => {
  const { productId } = useParams();
  const { data: commentsData } = useQuery(GET_COMMENTS);
  const { data: reviewData, loading: reviewLoading } = useQuery(
    GET_REVIEWS,
  );
  const [postReview, { data, loading, error }] = useMutation(
    POST_REVIEW,
    {
      update(cache, { data: { postProductReview } }) {
        const data = cache.readQuery({ query: GET_COMMENTS });
        cache.writeQuery({
          query: GET_COMMENTS,
          data: {
            comments: [postProductReview, ...data.comments.comments],
          },
        });
      },
    },
  );

  console.log(data, reviewData, reviewLoading);
  if (!data && !loading && !POST_REVIEW) {
    return <Redirect to="/error" />;
  }
  if (data) {
    if (data.postProductReview.__typename === 'Review') {
      return <Redirect to={`/products/${productId}`} />;
    }
  }
  console.log(data, commentsData, loading, error);
  return (
    <Comments
      post={postReview}
      comments={commentsData.comments.comments}
    />
  );
};
export default CommentsContainer;
