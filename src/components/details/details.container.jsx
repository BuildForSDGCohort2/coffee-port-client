import React from 'react';
import { CREATE_PRODUCT_REQUEST } from '../../apollo/request/request.operations';
import Details from './details.component';
import { useMutation } from '@apollo/client';
import { currentUserVar } from '../../apollo/cache';

const DetailsContainer = ({ product }) => {
  const alert = { severity: '', message: '' };

  const [
    createProductRequest,
    { data: requestData, loading: requestLoading },
  ] = useMutation(CREATE_PRODUCT_REQUEST);

  if (requestData) {
    if (
      requestData &&
      requestData.createProductRequest.__typename === 'Request'
    ) {
      alert.severity = 'success';
      alert.message =
        'Your request has been sent! You will be notified';
    } else if (
      requestData.createProductRequest.__typename ===
      'CreateProductRequestError'
    ) {
      alert.severity = 'info';
      alert.message = requestData.createProductRequest.message;
    } else if (
      requestData.createProductRequest.__typename ===
      'NotAuthenticatedUserError'
    ) {
      alert.severity = 'error';
      alert.message = `${requestData.createProductRequest.message} please login`;
    } else if (
      requestData.createProductRequest.__typename === 'Error'
    ) {
      alert.severity = 'error';
      alert.message = requestData.createProductRequest.message;
    } else {
      alert.severity = 'error';
      alert.message =
        'Your request can not be processed at the moment';
    }
  }

  return (
    <Details
      currentUserVar={currentUserVar()}
      alert={alert}
      product={product}
      createProductRequest={createProductRequest}
      requestLoading={requestLoading}
    />
  );
};

export default DetailsContainer;
