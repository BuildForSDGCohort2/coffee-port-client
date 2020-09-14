import React from 'react';
import Card from '@material-ui/core/Card';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';


import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import CustomButton from '../custom-button/custom-button.component';
import ListComponent from '../list-item/list-item.component';
import ProductImage from "../product-image/product-image.component"
import useStyles from './details.styles';

const Details = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} bgcolor="secondary.main">
      <Grid container>
        <Grid item xs={12} sm={12} md={6} className={classes.contain}>
         <ProductImage/>
        </Grid>
        <Grid container
          item
          xs={false}
          sm={false}
          md={1}
          justify="center"
        
        >
          
          <Divider orientation="vertical"  />
        </Grid>

        <Grid item xs={12} sm={12} md={4} >
          <Typography className={classes.title} variant="h5">
            $23.49
          </Typography>

          <form>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} sm={12} md={6}>
                <CustomInputField
                  id="filled-number"
                  label="Amount"
                  type="number"
                  variant="filled"
                  fullWidth
                  className={classes.formfields}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <CustomButton
                  variant="contained"
                  color="primary"
                  className={classes.formfields}
                  startIcon={<ShoppingCartIcon />}
                >
                  Request
                </CustomButton>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <List>
                  <ListComponent 
              
                  avatar
                    person
                    primary="created by"
                    secondary="someone"
                  />
                    <ListComponent 
                    
                    avatar
                    sales
                    primary="Total sales"
                    secondary="13 items"
                  />
                  <ListComponent
                    primary="Catagory"
                    trailing="oil"
                  />
                    <Divider />
                  <ListComponent
                    primary="released on"
                    trailing="1 month ago"
                  />
                    <Divider />
                  <ListComponent
                    primary="last update"
                    trailing="3 hrs ago"
                  />
                </List>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Details;
