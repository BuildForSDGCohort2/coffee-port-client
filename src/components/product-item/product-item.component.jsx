import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './product-item.styles';

const ProductItem=()=>{
    const classes = useStyles();
    return (
      <Grid  className={classes.root}  container >
        <Card  className={classes.card}>
             <CardMedia
        className={classes.cover}
        image="https://cdn.shopify.com/s/files/1/1003/7044/files/green_coffee_green_coffee_beans_coffee_roaster_unroasted_coffee_beans_raw_coffee_beans_large.jpg?v=1533901791"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Coffee
          </Typography>
          <Typography body1 variant="subtitle1" color="textSecondary">
            Geographical Designation: Yirgachefe A
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Group: Commercial Washed
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Grade: Q2
          </Typography>
        </CardContent>
      </div>
     
    </Card>
    </Grid>
    );
}
export default ProductItem