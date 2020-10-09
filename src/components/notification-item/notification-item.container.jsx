import React from 'react';
import { UPDATE_REQUEST } from '../../apollo/request/request.operations';
import { useMutation } from '@apollo/client';
import NotificationItem from './notification-item.component';

const NotificationItemContainer = ({ request }) => {
  const [updateRequest, { loading ,data}] = useMutation(UPDATE_REQUEST);
  const alert = {
    severity: '',
    message: '',
  };

   
  if (data){
    if(data.updateProductRequest.__typename==="UpdateRequestSuccess"){
      alert.severity="success";
      alert.message="Success!";
    }
    else if(data.updateProductRequest.__typename==="GetRequestError"){
      alert.severity="error";
      alert.message=data.updateProductRequest.message;
    }
    else if(data.updateProductRequest.__typename==="NotAuthenticatedUserError"){
      alert.severity="error";
      alert.message=data.updateProductRequest.message;
    }
    else if(data.updateProductRequest.__typename==="UpdateProductRequestError"){
      alert.severity="error";
      alert.message=data.updateProductRequest.message;
    }
  }

  return (
    <NotificationItem
      alert={alert}
      loading={loading}
      updateRequest={updateRequest}
      request={request}
    />
  );
};

export default NotificationItemContainer;
