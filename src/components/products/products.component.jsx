import React from 'react';
import Filter from '../filter/filter.component';
import ProductPreview from '../product-preview/product-preview.component';
import CustomButton from '../custom-button/custom-button.component';

const Products=({history,match})=>{
    return(
    <div>
        <Filter search={true} />
        <CustomButton onClick={()=>history.push(`${match.url}/new/create`)}>Add new Product</CustomButton>
       <ProductPreview />
    </div>
);
}

export default Products

