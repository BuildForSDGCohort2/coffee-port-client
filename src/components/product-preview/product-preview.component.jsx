import React from 'react';
import ProductItem from '../../components/product-item/product-item.component';
import { GET_ALL_FILTERS} from '../../apollo/filter/filter.operations';
import { useQuery } from '@apollo/client';
import  PRODUCT_DATA  from '../products/products.data';
import { Grid } from '@material-ui/core';
import useStyles from './product-preview.styles';

const ProductPreview = () =>{
    const classes = useStyles();
    const { data } = useQuery(GET_ALL_FILTERS);
    console.log('data',data);
    const {filters}=data;

    const filteredByType = PRODUCT_DATA.filter((product)=>{
        const {type}=product;

        return (type === filters.type || filters.type==='' || filters.type===null)
      
      });
    const filteredByUniqueAttributes = filteredByType.filter((product)=>{
        const {uniqueAttributes}=product;
        return Object.getOwnPropertyNames(uniqueAttributes).every((property)=>
        {
            console.log(filters.uniqueAttributes[property]==='');
            return (filters.uniqueAttributes[property]===uniqueAttributes[property] || filters.uniqueAttributes[property]==='' || filters.uniqueAttributes[property]===null)
        
        });


    });

    return (
        <Grid className={classes.root} container>
        {filteredByUniqueAttributes.map((product)=>(<ProductItem product={product} key={product.id}/>))}
         </Grid>
    );

}

export default ProductPreview;