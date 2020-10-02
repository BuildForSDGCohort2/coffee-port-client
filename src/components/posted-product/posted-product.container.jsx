import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_POSTED_PRODUCT } from '../../apollo/server/queries';
import { useQuery } from '@apollo/client';
import { CircularProgress, Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import PostedProduct from './posted-product.component';

const PostedProductContainer = () => {
  const { supplierId } = useParams();
  const { loading, data } = useQuery(GET_POSTED_PRODUCT, {
    variables: { supplierId },
  });
  if (!data && !loading) {
    return <Redirect to="/error" />;
  }

  console.log(data, loading);
  if (loading)
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    );

  return <PostedProduct data={data.user} loading={loading} />;
};

export default PostedProductContainer;
