import React from 'react';
import { POST_PRODUCT } from '../../apollo/product/product.operations';
import PostProduct from './post-product.component';
import { useMutation } from '@apollo/client';

const PostProductContainer = () => {
  const [postProduct, { data, loading, error }] = useMutation(
    POST_PRODUCT,
  );
  console.log('err', error);
  return (
    <PostProduct
      data={data}
      loading={loading}
      postProduct={postProduct}
    />
  );
};

export default PostProductContainer;
