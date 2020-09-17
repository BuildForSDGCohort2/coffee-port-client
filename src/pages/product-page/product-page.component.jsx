import React from 'react';
import { Route } from 'react-router-dom';
import Products from '../../components/products/products.component';
import SingleProduct from '../../components/single-product/single-product.component';
import PostProduct from '../../components/post-product/post-product.component';

const ProductPage = ({match}) => (
    <div>
        <Route exact path={`${match.path}/new/create`} component={PostProduct}/>
        <Route exact path={`${match.path}`} component={Products}/>
        <Route exact path={`${match.path}/:productId`} component={SingleProduct}/>
        
    </div>
    
    );

export default ProductPage;
