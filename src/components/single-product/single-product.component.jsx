import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Details from '../details/details.component';
import useStyles from './single-product.styles';
import DescriptionComponent from '../description/description.component';
import PRODUCT_DATA from '../products/products.data';

const SingleProduct = () => {
  const classes = useStyles();
  const { productId } = useParams();
  const product = PRODUCT_DATA.find(
    (product) => product.id === productId,
  );

  return (
    <div>
      <Box className={classes.root} bgcolor="primary.main">
        {' '}
        <Typography className={classes.title} variant="h5">
          {product.productName}
        </Typography>
      </Box>
      <Details product={product} />
      <DescriptionComponent />
    </div>
  );
};
export default SingleProduct;
