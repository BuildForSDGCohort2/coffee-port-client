import React from 'react';
import { POST_PRODUCT } from '../../apollo/product/product.operations';
import PostProduct from './post-product.component';
import { useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import { logout } from '../../utils';

const PostProductContainer = () => {
  const alert = {
    severity: '',
    message: '',
  };
  let inputErrors = null;
  const [postProduct, { data, loading,error }] = useMutation(POST_PRODUCT,{ errorPolicy: 'all'});
  if (data) {
    if (data.postProduct.__typename === 'Product') {
      alert.severity = 'success';
      alert.message = 'You have successfully posted this product';
    } else if (
      data.postProduct.__typename === 'ProductNotAddedError'
    ) {
      alert.severity = 'error';
      alert.message = data.postProduct.message;
    } else if (
      data.postProduct.__typename === 'ProductInputError'
    ) {
      alert.severity = 'error';
      alert.message = data.postProduct.message;
      inputErrors = data.postProduct.productErrors;
    } 
    
    else if (
      data.postProduct.__typename === 'NotAuthenticatedUserError'
    ) {
      alert.severity = 'error';
      alert.message = data.postProduct.message;
      logout();
    }
  }
  if(error){
   // console.log(error.graphQLErrors,error.graphQLErrors[0].message,"here in error");
   // alert.severity = 'error';
   // alert.message = error.graphQLErrors[0].message;
  }

  if (!data && !loading && !postProduct) {
    return <Redirect to="/error" />;
  }

  return (
    <PostProduct
      data={data}
      alert={alert}
      inputErrors={inputErrors}
      error={error}
      loading={loading}
      postProduct={postProduct}
    />
  );
};

export default PostProductContainer;
