import React from 'react';
import useStyles from './notification-item.styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


const NotificationItem =({request,updateRequest,loading,alert})=> {
  const handleAccept = (e) =>{
    updateRequest({variables: {updateProductRequestRequestId: request.id,updateProductRequestRequestStatus: "ACCEPTED"}})


  }
  const handleReject = (e) =>{
    updateRequest({variables: {updateProductRequestRequestId: request.id,updateProductRequestRequestStatus: "REJECTED"}})


  }


  const classes = useStyles();
  console.log(request);
  return (
      <Grid xs={8}>
        <Card  className={classes.root}>
        <Grid  item container>
        <Grid xs={8}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             {request.requestedBy.company.companyName} Sent an inquiry to buy...
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Inquiry: {request.inquiryText}
          </Typography>
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
        <Button onClick={handleAccept} name='accept' size="small" color="primary">
          Accept
        </Button>
        <Button onClick={handleReject} name='reject' size="small" color="secondary">
          Reject
        </Button>
        {loading? <CircularProgress/>:null}
      </CardActions>
      </Grid>
      <Grid className={classes.requestorInfo} xs={4}>
          

      </Grid>
      </Grid>
    </Card>
    </Grid>
  );
}

export default NotificationItem;
