import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT } from '../../apollo/product/product.operations';
import { CircularProgress, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';
import SingleProduct from './single-product.component';
const SingleProductContainer = () => {
  const { productId } = useParams();
  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });

  if (!data && !loading) {
    return <Redirect to="/error" />;
  }

  if (loading)
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    );
  if (!data && !loading) {
    return <Redirect to="/error" />;
  }
  return <SingleProduct data={data} loading={loading} />;
};

export default SingleProductContainer;
