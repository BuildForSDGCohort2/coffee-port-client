import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_USER } from '../../apollo/server/queries';
import { useQuery } from '@apollo/client';
import { CircularProgress, Grid } from '@material-ui/core';

import SingleSupplierPage from './single-supplier.component';

const SingleSupplierContainer = () => {
  const { supplierId } = useParams();
  const { loading, data } = useQuery(GET_USER, {
    variables: { supplierId },
  });
 // const {data} =useQuery(GET_POSTED_PRODUCT);
  console.log(data, loading);
  if (loading) return (<Grid container alignItems="center" justify="center">
  <CircularProgress />
</Grid>);

  return <SingleSupplierPage data={data.user} loading={loading} />;
};

export default SingleSupplierContainer;
