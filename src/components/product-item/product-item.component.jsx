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
    <Grid onClick={()=>history.push(`${match.url}/${product.id}`)} className={classes.root} item xs={4}>
      <Card className={classes.card}>
        <CardActionArea>

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Grid container>
              <Typography className={classes.companyName} variant="subtitle2"
                color="textSecondary">
             by {product.user.company.companyName}
            </Typography>
           
            <Chip color="primary" label={`$ ${product.productPrice}`}/>
            
      </Grid>
            <Typography className={classes.productName} component="h5" variant="h5">
              {product.productName}
            </Typography>
            {
              Object.getOwnPropertyNames(product.uniqueAttributes).filter((property,index)=>index<5).map((property) => (
                
               
                property ==='__typename' || product.uniqueAttributes[property]===null || product.uniqueAttributes[property]===''?null:
               ( <Grid container>
                    <Grid item xs={7}>
                    <Typography
                    className={classes.property}
                key={property}
                body1="true"
                variant="subtitle1"
                color="textSecondary"
              >
                {property.toUpperCase() + ' '}
              </Typography>
                    </Grid>
                    <Grid item xs={5}>
                    <Typography
                key={property}
                body1="true"
                variant="subtitle1"
                color="textSecondary"
              >
                {product.uniqueAttributes[property]}
              </Typography>
                 </Grid>
                  </Grid>)
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
