import React from 'react';
import { POST_PRODUCT } from '../../apollo/product/product.operations';
import PostProduct from './post-product.component';
import { useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';

const PostProductContainer = () => {
  let alert={
    severity:'',
    message:'',
  }
  const [postProduct, { data, loading }] = useMutation(POST_PRODUCT);
  console.log(data);
  if (data) {
    if (data.postProduct__typename === 'Product') {
      alert.severity='success';
      alert.message='You have successfully posted this product'
    } else if (
      data.postProduct__typename === ' ProductNotAddedError'
    ) {
      alert.severity='error';
      alert.message='There seems to be some problem'
    } else if (
      data.postProduct__typename === ' on ProductInputError'
    ) {
      alert.severity='error';
      alert.message='There seems to be some problem'
    } else if (
      data.postProduct__typename === ' on NotAuthenticatedUserError'
    ) {
      return <Redirect to="/waiting" />;
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
