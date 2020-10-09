import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';
import useStyles from './posted-product-item.styles';

const PostedProductItem = ({product}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.details}>
      <Grid item sm={12} md={4}>
        <Typography component="h6" variant="h6">
         {product.productName}
        </Typography>
        <Rating
          name="read-only"
          value={3}
          readOnly
          className={classes.rating}
        />
      </Grid>
      <Grid item sm={12} md={4}>
        <Typography component="h6" variant="h6">
          {product.productQuantity}
        </Typography>
      </Grid>
      <Grid item sm={12} md={4}>
        <Chip color="primary" label={`$${product.productPrice}`}/>
      </Grid>
    </Grid>
  );
};
export default PostedProductItem;
