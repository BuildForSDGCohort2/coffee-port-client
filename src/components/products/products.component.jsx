import React from 'react';
import { useRouteMatch,useHistory } from 'react-router-dom';
import Filter from '../filter/filter.component';
import ProductPreview from '../product-preview/product-preview.component';
import CustomButton from '../custom-button/custom-button.component';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './products.styles';

const Products=()=>{
    const match = useRouteMatch();
    const classes = useStyles();
    const history = useHistory();
    return(
    <div>
        <Filter search={true} />
        <CustomButton className={classes.button} startIcon={<AddIcon />} variant="contained" color="secondary" onClick={()=>history.push(`${match.url}/new/create`)}>Add new Product</CustomButton>
       <ProductPreview />
    </div>
);
}

export default Products

