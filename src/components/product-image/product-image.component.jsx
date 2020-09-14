import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CustomButton from '../custom-button/custom-button.component';
import useStyles from './product-image.styles';

const ProductImage = () => {
  const classes = useStyles();
  return (
      <div>
      <div className={classes.image}></div>
      <Divider className={classes.divider} />
      <Grid container>
        <Grid item xs={12} sm={12} md={6}className={classes.buttonContainer}>
          <CustomButton
            variant="contained"
            color="secondary"
            className={classes.buttonContainer}
            startIcon={<ShoppingCartIcon />}
          >
            Add to WishList
          </CustomButton>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.linkContainer}>
          <Typography variant="body" className={classes.links}>
            share with
          </Typography>
          <TwitterIcon className={classes.icons} />
          <FacebookIcon className={classes.icons} />
        </Grid>
      </Grid>
      </div>
  );
};
export default ProductImage;
