import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './product-home-card.styles';
import {ReactComponent as CoffeeIcon}from '../../assets/coffee-beans.svg';
import {ReactComponent as SesameIcon}from '../../assets/sesame.svg';
import {ReactComponent as FlowerIcon}from '../../assets/flower.svg';
const ProductHomeCard = ({type}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container justify='center'  direction="column" alignItems='center' className={classes.root} item>
    <Card  variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         #1
        </Typography>
    {type==='Coffee'?<CoffeeIcon/>:type==='Sesame'?<SesameIcon/>:type==='Flower'?<FlowerIcon/>:null}
        <Typography variant="h5" component="h2">
          {type}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Grade | Type | Geographical Designation
        </Typography>
        <Typography variant="body2" component="p">
        The most important thing to remember about
         Ethiopian coffee is that Ethiopia is the Motherland of
          all arabica coffee.
        </Typography>
      </CardContent>
    </Card>
    </Grid>
   
  );
}

export default ProductHomeCard;