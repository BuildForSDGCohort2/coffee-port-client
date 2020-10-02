import React from 'react';
import { POST_PRODUCT } from '../../apollo/product/product.operations';
import PostProduct from './post-product.component';
import { useMutation } from '@apollo/client';

const PostProductContainer = () => {
  let alert={
    severity:'',
    message:'',
  }
  const [postProduct, { data, loading, error }] = useMutation(
    POST_PRODUCT,
  );
  console.log('heeeeeeeeeeeeee',data);

  if (data && !loading){
    if (data.postProduct.__typename==='Product'){
      alert.severity='success';
      alert.message='You have successfully posted this product'
    }
    else{
      alert.severity='error';
      alert.message='There seems to be some problem'

    }
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
