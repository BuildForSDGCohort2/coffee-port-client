import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CustomInputField from '../custom-input-field/custom-input-field.component';
import CustomButton from '../custom-button/custom-button.component';
import ListComponent from '../list-item/list-item.component';
import ProductImage from "../product-image/product-image.component"
import useStyles from './details.styles';
import CustomAlert from '../custom-alert/custom-alert.component';

const Details = ({product,createProductRequest,alert}) => {
  const classes = useStyles();
  const {productPrice,uniqueAttributes}=product;

  const handleSubmit = (e) =>{
      e.preventDefault();
      createProductRequest({variables:{createProductRequestProductId:product.id}});
  }


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
            ${productPrice}
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} sm={12} md={12}>
                <CustomInputField
                  id="filled-multiline-static"
                  rows={4}
                  label="Inquiry"
                  multiline
                  variant="filled"
                  className={classes.formfields}
                />
              </Grid>
              <Grid justify="flex-end" alignItems = "center" container  item xs={12} sm={12} md={12}>
                <CustomButton
                  variant="contained" size="small" color="primary" type="submit" mr={2}
                >
                  Send Request
                </CustomButton>
                {alert.severity?<CustomAlert severity={alert.severity}  message={alert.message}/>:null}
                
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <List>
                  { Object.getOwnPropertyNames(uniqueAttributes).map((property)=>( 
                    property!=='__typename'?
                    (<div>
                  <ListComponent
                    primary={property}
                    trailing={uniqueAttributes[property]}
                  />
                  <Divider />
                    </div>):null
                  ))}
                 

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
