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
    GET_REVIEWS, {
      variables: { productId },
    });
  
  const [postReview, { data, loading, error }] = useMutation(
    POST_REVIEW,
    {
      update:(cache, data)=>{
        const cachId =cache.identify(data.Review)
        cache.modify({
          fields: {
            comments:(existingFieldData,{toReference})=>{
              return [...existingFieldData, toReference(cachId)];
            }

    }
  });
}
});

  console.log(data, reviewData, loading,);
  if (!data && !loading && !POST_REVIEW) {
    return <Redirect to="/error" />;
  }
  if (data) {
    if (data.postProductReview.__typename === 'Review') {
      return <Redirect to={`/products/${productId}`} />;
    }
  }
  console.log(data, commentsData, loading, error);
  if(!reviewLoading){
  return (
    <Comments
      post={postReview}
      comments={reviewData.product.reviews}
    />

  );
  }
};
export default CommentsContainer;
