import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Details from '../details/details.component';
import useStyles from './single-product.styles';
import DescriptionComponent from '../description/description.component';
import {storeComments} from '../../utils'

const SingleProduct = ({data,loading}) => {
  const classes = useStyles();
  const {product}=data

  storeComments(data.product.reviews)
console.log(data);
  return (
    <div>
      <Box className={classes.root} bgcolor="primary.main">
        {' '}
        <Typography className={classes.title} variant="h5">
          {product.productName}
        </Typography>
      </Box>
      <Details product={product} />
      <DescriptionComponent product={product}/>
    </div>
  );
};
export default SingleProduct;
