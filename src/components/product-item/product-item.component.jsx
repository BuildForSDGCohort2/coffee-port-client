import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import useStyles from './product-item.styles';
import {withRouter} from 'react-router-dom';
import { CardActionArea } from '@material-ui/core';

const ProductItem = ({ product,match,history}) => {
  const classes = useStyles();
  return (
    <Grid onClick={()=>history.push(`${match.url}/${product.id}`)} className={classes.root} xs={6}>
      <Card className={classes.card}>
        <CardActionArea>
        {/* <CardMedia
          className={classes.cover}
          image="https://cdn.shopify.com/s/files/1/1003/7044/files/green_coffee_green_coffee_beans_coffee_roaster_unroasted_coffee_beans_raw_coffee_beans_large.jpg?v=1533901791"
          title={product.type}
        /> */}

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Grid container>
              <Typography className={classes.companyName} variant="subtitle2"
                color="textSecondary">
              by addis export PLC
            </Typography>
           
            <Chip color="primary" label='$23.87'/>
            
      </Grid>
            <Typography component="h5" variant="h5">
              {product.type}
            </Typography>
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
        </CardActionArea>
      </Card>
    </Grid>
  );
};
export default withRouter(ProductItem);
