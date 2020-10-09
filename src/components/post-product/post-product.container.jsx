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
  const [postProduct, { data, loading }] = useMutation(POST_PRODUCT);
  if (data) {
    if (data.postProduct.__typename === 'Product') {
      alert.severity = 'success';
      alert.message = 'You have successfully posted this product';
    } else if (
      data.postProduct.__typename === 'ProductNotAddedError'
    ) {
      alert.severity = 'error';
      alert.message = 'There seems to be some problem';
    } else if (
      data.postProduct.__typename === 'ProductInputError'
    ) {
      alert.severity = 'error';
      alert.message = 'There seems to be some problem';
    } else if (
      data.postProduct.__typename === 'NotAuthenticatedUserError'
    ) {
      alert.severity = 'error';
      alert.message = 'You are not Authenticated. Please log in';
      logout();
    }
  }

  if (!data && !loading && !postProduct) {
    return <Redirect to="/error" />;
  }

  return (
    <PostProduct
      data={data}
      alert={alert}
      loading={loading}
      postProduct={postProduct}
    />
  );
};

export default PostProductContainer;
