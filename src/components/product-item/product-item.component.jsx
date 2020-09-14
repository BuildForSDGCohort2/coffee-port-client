import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './product-item.styles';

const ProductItem = ({ product }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image="https://cdn.shopify.com/s/files/1/1003/7044/files/green_coffee_green_coffee_beans_coffee_roaster_unroasted_coffee_beans_raw_coffee_beans_large.jpg?v=1533901791"
          title={product.type}
        />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {product.type}
            </Typography>
             {/* {[...product.uniqueAttributes.entries()].map(
              (attribute) => (
                <Typography
                  key={attribute[0]}
                  body1="true"
                  variant="subtitle1"
                  color="textSecondary"
                >
                  {attribute[0] + ' ' + attribute[1]}
                </Typography>
              ),
            )}  */}

            {
              Object.getOwnPropertyNames(product.uniqueAttributes).map((property) => (
                <Typography
                key={property}
                body1="true"
                variant="subtitle1"
                color="textSecondary"
              >
                {property + ' ' + product.uniqueAttributes[property]}
              </Typography>
              ))

            }

          </CardContent>
        </div>
      </Card>
    </Grid>
  );
};
export default ProductItem;
