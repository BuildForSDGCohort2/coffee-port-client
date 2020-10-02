import React from 'react';
import { POST_PRODUCT } from '../../apollo/product/product.operations';
import PostProduct from './post-product.component';
import { useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';

const PostProductContainer = () => {
  const [postProduct, { data, loading }] = useMutation(POST_PRODUCT);
  console.log(data);
  if (data) {
    if (data.postProduct__typename === 'Product') {
    } else if (
      data.postProduct__typename === ' ProductNotAddedError'
    ) {
    } else if (
      data.postProduct__typename === ' on ProductInputError'
    ) {
    }
  }

  if (!data && !loading && !postProduct) {
    return <Redirect to="/error" />;
  }

  return (
    <PostProduct
      data={data}
      loading={loading}
      postProduct={postProduct}
    />
  );
};

export default PostProductContainer;
