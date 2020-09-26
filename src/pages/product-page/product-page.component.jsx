import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import Products from '../../components/products/products.component';
import SingleProductContainer from '../../components/single-product/single-product.container';
import PostProductContainer from '../../components/post-product/post-product.container';

const ProductPage = () => {
  const match = useRouteMatch();
  return (
    <div>
      <Route exact path={`${match.path}/new/create`}>
        <PostProductContainer />
      </Route>
      <Route exact path={`${match.path}`}>
        <Products />
      </Route>
      <Route exact path={`${match.path}/:productId`}>
        <SingleProductContainer />
      </Route>
    </div>
  );
};

export default ProductPage;
