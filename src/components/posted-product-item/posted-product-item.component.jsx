import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';
import useStyles from './posted-product-item.styles';

const PostedProductItem = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.details}>
      <Grid item md={4}>
        <Typography component="h6" variant="h6">
          coffee
        </Typography>
        <Rating
          name="read-only"
          value={3}
          readOnly
          className={classes.rating}
        />
      </Grid>
      <Grid item md={4}>
        <Typography component="h6" variant="h6">
          Grade 5
        </Typography>
      </Grid>
      <Grid item md={4}>
        <Chip color="primary" label="$23.87" />
      </Grid>
    </Grid>
  );
};
export default PostedProductItem;
