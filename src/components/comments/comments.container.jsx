import React from 'react';
import { useMutation,useQuery } from '@apollo/client';
import { POST_REVIEW } from '../../apollo/server/mutations';
import Comments from './comments.component';
import {  Redirect } from 'react-router-dom';
import {GET_COMMENTS} from '../../apollo/client/queries'

const CommentsContainer = ({comments}) => {
  const {data:commentsData}=useQuery(GET_COMMENTS)
  const [postReview, { data, loading, error }] = useMutation(
    POST_REVIEW, {
      update(cache, { data: { postProductReview } }) {
        const data = cache.readQuery({ query: GET_COMMENTS });
        cache.writeQuery({
          query: GET_COMMENTS,
          data: { comments: [postProductReview, ...data.comments.comments] },
        });
      },
      }
    );
    if(!data && !loading && !POST_REVIEW){
      return <Redirect to="/error" />
    }
  
  console.log(data,commentsData,loading,error);
  return <Comments post={postReview} comments={commentsData.comments.comments}/>;
};
export default CommentsContainer;
