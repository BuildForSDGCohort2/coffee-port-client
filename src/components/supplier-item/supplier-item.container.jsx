import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT } from '../../apollo/product/product.operations';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import SingleProduct from './supplier-item.component';

const CompanyItemContainer = () => {
  const { productId } = useParams();
  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { productId },
  });
  console.log(data, loading);
  if (loading) return <CircularProgress />;

  return <SingleProduct data={data} loading={loading} />;
};

export default CompanyItemContainer;
