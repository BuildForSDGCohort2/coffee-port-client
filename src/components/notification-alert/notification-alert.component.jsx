import React from 'react';
import useStyles from './notification-alert.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import {Redirect} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomAlert from '../custom-alert/custom-alert.component';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

const NotificationAlert = ({request}) =>{
    const history =useHistory();
    const classes = useStyles();
    return (
        <Grid xs={8}>
          <Card  className={classes.root}>
          <Grid  item container>
          <Grid xs={8}>
        <CardActionArea>
          <CardContent>
              <CustomAlert severity='success' message={`${request.productOwner.company.companyName} has accepted your buy request`} />

            <Grid container>
            <Grid item xs={4}> <Typography variant="body2" color="textSecondary" component="p">Product Name:</Typography></Grid>
            <Grid item xs={4}> <Typography variant="body2" color="textSecondary" component="p">{request.requestedProduct.productName}</Typography></Grid>
            </Grid>
            <Grid container>
            <Grid item xs={4}> <Typography variant="body2" color="textSecondary" component="p">Quantity:</Typography></Grid>
            <Grid item xs={4}> <Typography variant="body2" color="textSecondary" component="p">{`${request.requestedProduct.productQuantity} ${request.requestedProduct.productMeasurementUnit}`}</Typography></Grid>
            </Grid>
            <Grid container>
            <Grid item xs={4}> <Typography variant="body2" color="textSecondary" component="p">Price:</Typography></Grid>
            <Grid item xs={4}> <Typography variant="body2" color="textSecondary" component="p">{`$ ${request.requestedProduct.productPrice}`}</Typography></Grid>
            </Grid>

            
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button onClick={()=>history.push( `/suppliers/${request.productOwner.id}` )} size="small" color="primary">
          Click here to learn more about {request.productOwner.company.companyName}
        </Button>
        </CardActions>
        
        </Grid>
        </Grid>
      </Card>
      </Grid>
    );

}

export default NotificationAlert;