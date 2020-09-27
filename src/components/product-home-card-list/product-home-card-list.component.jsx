import React from 'react';
import ProductHomeCard from '../product-home-card/product-home-card.component';
import Grid from '@material-ui/core/Grid';
import {TYPE} from '../../data/combobox.data';

const ProductHomeCardList = () =>(
    <Grid container justify='center' alignItems='center'>
        {TYPE.map((type)=>(<ProductHomeCard type={type}/>))}
        
    </Grid>

);

export default ProductHomeCardList;

