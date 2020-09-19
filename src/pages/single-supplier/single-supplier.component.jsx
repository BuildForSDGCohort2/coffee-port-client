import React from 'react';
import useStyles from './single-supplier.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const SingleSupplierPage = () => {
  const classes = useStyles();

  return (

    <div >
        
        <div  className={classes.block}>
      <Typography
        
          color="secondary"
          gutterBottom
          variant="h3"
          className={classes.title}
        >
                  Supplier name
         </Typography>
         <Rating name="read-only" value={3} readOnly   className={classes.rating}/>
         </div>
     
    
    <div className={classes.secondBlock}>
    <Typography
          className={classes.stat}
          color="primary"
          gutterBottom
          variant="body1"
        >
                  STATS
                  </Typography>
                   <Card className={classes.thirdBlock}>
     <CardContent >
     <Grid container >
      <Grid item  sm={12} md={4}   className={classes.achievements}>
      <Typography
         className={classes.estimate}
          color="primary"
          gutterBottom
          variant="h6"

        >
                  4247
         </Typography>
         <Typography
        
          color="primary"
          gutterBottom
          variant="body1"
          className={classes.description}
        >
                  All time clients
         </Typography>
      </Grid>
      <Grid item  sm={12} md={4} className={classes.achievements} >
      <Typography
         
          color="primary"
          gutterBottom
          variant="body1"
          className={classes.estimate}
        >
                  4247
         </Typography>
         <Typography
          color="primary"
          gutterBottom
          variant="body1"
          className={classes.description}
        >
                  All time clients
         </Typography>
      </Grid>
      <Grid item  sm={12} md={4}  className={classes.achievements}>
      <Typography
          color="primary"
          gutterBottom
          variant="h6"
          className={classes.estimate}
        >
                  4247
         </Typography>
         <Typography
          color="primary"
          gutterBottom
          variant="body1"
          className={classes.description}
        >
                  All time clients
         </Typography>
      </Grid>
      </Grid>
     </CardContent>
    
     </Card>
         </div>
     <div className={classes.fourthBlock}>
     <Typography
        
        color="primary"
        gutterBottom
        variant="h6"
        className={classes.title}
      >
                Supplier name
       </Typography>
     </div>
         </div>
  );
};

export default SingleSupplierPage;
