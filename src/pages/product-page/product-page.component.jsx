import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import Products from '../../components/products/products.component';
import SingleProduct from '../../components/single-product/single-product.component';
import PostProduct from '../../components/post-product/post-product.component';

const ProductPage = () => {
  const match = useRouteMatch();
  return (
    <div>
      <Route exact path={`${match.path}/new/create`}>
        <PostProduct />
      </Route>
      <Route exact path={`${match.path}`}>
        <Products />
      </Route>
      <Route exact path={`${match.path}/:productId`}>
        <SingleProduct />
      </Route>
    </div>
  );
};

export default ProductPage;
