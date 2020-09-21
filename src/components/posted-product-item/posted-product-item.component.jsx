import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Chip from '@material-ui/core/Chip';
import useStyles from './posted-product-item.styles';

const PostedProductItem = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.details}>
        <Grid item md={6}>
          <Typography component="h5" variant="h5">
            coffee
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Chip color="primary" label="$23.87" />
        </Grid>
      </Grid>

      <Typography
        body1="true"
        variant="subtitle1"
        color="textSecondary"
      >
        Grade 5
      </Typography>
    </div>
  );
};
export default PostedProductItem;
