import React from 'react';
import { useMutation } from '@apollo/client';
import {  Redirect } from 'react-router-dom';
import { DELETE_REVIEW } from '../../apollo/server/mutations';
import GET_CURRENT_USER from '../../apollo/client/queries';
import { useQuery } from '@apollo/client';
import CommentItem from './comment-item.component';

const CommentItemContainer = ({comment}) => {
  const { data:currentUserData } = useQuery(GET_CURRENT_USER);
  const [deleteReview, { data, loading, error }] = useMutation(
    DELETE_REVIEW,
  );
  if(!data && !loading && !deleteReview){
    return <Redirect to="/error" />
  }

  console.log(data,loading,error);
  return <CommentItem email={currentUserData.currentuser.email}deleteReview={deleteReview} comment={comment}/>;
};
export default CommentItemContainer;
