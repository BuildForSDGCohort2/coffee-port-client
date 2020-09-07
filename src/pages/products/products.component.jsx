import React from 'react';
import Filter from '../../components/filter/filter.component';
import ProductItem from '../../components/product-item/product-item.component';
import ProductPreview from '../../components/product-preview/product-preview.component';

const Products=()=>(
    <div>
        <Filter/>
        <ProductItem/>
        <ProductPreview/>
    </div>
);

export default Products

