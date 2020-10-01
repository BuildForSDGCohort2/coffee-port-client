import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT } from '../../apollo/product/product.operations';
import { CircularProgress, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import SingleProduct from './single-product.component';
import { useMutation } from '@apollo/react-hooks';

const SingleProductContainer = () => {
  const { productId } = useParams();
  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });


  console.log(data, loading);
  if (loading) return (<Grid container alignItems="center" justify="center">
  <CircularProgress />
</Grid>);

  return <SingleProduct data={data} loading={loading} />;
};

export default SingleProductContainer;
