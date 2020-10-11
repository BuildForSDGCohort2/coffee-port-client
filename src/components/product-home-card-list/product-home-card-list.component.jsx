import React from 'react';
import ProductHomeCard from '../product-home-card/product-home-card.component';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TYPE_WITH_INTRO } from '../../data/combobox.data';
import useStyle from './product-home-card.data';

const ProductHomeCardList = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Typography variant="h4" className={classes.title}>
          Did you know?
        </Typography>
      </Grid>

      <Grid container justify="center" alignItems="center">
        {TYPE_WITH_INTRO.map((type, index) => (
          <ProductHomeCard key={type.name} type={type} index={index} />
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductHomeCardList;
