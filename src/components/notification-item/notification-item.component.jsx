import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  root: {
   margin:theme.spacing(4),
  },
  media: {
    height: 140,
  },
  requestorInfo:{
      background:theme.palette.secondary.main,
      color:theme.palette.text.primary,
  }
}));

const NotificationItem =()=> {
  const classes = useStyles();
  return (
      <Grid xs={8}>
        <Card  className={classes.root}>
        <Grid  item container>
        <Grid xs={8}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Company Name Sent an inquiry to buy...
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, molestiae. Quidem nemo libero odit? Modi esse sed
        dolor enim optio reprehenderit magnam earum dicta mollitia
        suscipit, aperiam numquam recusandae nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, molestiae. Quidem nemo libero odit? Modi esse sed
        dolor enim optio reprehenderit magnam earum dicta mollitia
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Accept
        </Button>
        <Button size="small" color="secondary">
          Reject
        </Button>
      </CardActions>
      </Grid>
      <Grid className={classes.requestorInfo} xs={4}>
          dfghkjlkfchgjbkl

      </Grid>
      </Grid>
    </Card>
    </Grid>
  );
}

export default NotificationItem;
