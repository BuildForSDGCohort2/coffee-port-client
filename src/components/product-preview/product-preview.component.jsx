import React from 'react';
import ProductItem from '../../components/product-item/product-item.component';
import { GET_ALL_FILTERS } from '../../apollo/filter/filter.operations';
import { useQuery } from '@apollo/client';
import { CircularProgress, Grid } from '@material-ui/core';
import useStyles from './product-preview.styles';
import {  Redirect } from 'react-router-dom';
import { GET_ALL_PRODUCTS } from '../../apollo/product/product.operations';

const ProductPreview = () => {
  const classes = useStyles();
  const { data } = useQuery(GET_ALL_FILTERS);
  console.log('data', data);
  const {
    data: productData,
    loading: productLoading,
    error,
  } = useQuery(GET_ALL_PRODUCTS);
 
  if(!productData && !productLoading){
    return <Redirect to="/error" />
  }

  if (productLoading)
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    );
  console.log(productData, productLoading, error);
  const { products } = productData;
  const { filters } = data;
  const filteredByType = products.products.filter((product) => {
    const { productName } = product;
    return (
      productName === filters.productName ||
      filters.productName === '' ||
      filters.productName === null
    );
  });
  const filteredByUniqueAttributes = filteredByType.filter(
    (product) => {
      const { uniqueAttributes } = product;
      const l = Object.keys(uniqueAttributes).filter(
        (p) => p !== '__typename',
      );

      return l.every((property) => {
        return (
          filters.uniqueAttributes[property] ===
            uniqueAttributes[property] ||
          filters.uniqueAttributes[property] === '' ||
          filters.uniqueAttributes[property] === null
        );
      });
    },
  );
  return (
    <Grid className={classes.root} container>
      {filteredByUniqueAttributes.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default ProductPreview;
