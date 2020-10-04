import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './product-home-card.styles';
import { ReactComponent as CoffeeIcon } from '../../assets/coffee-beans.svg';
import { ReactComponent as SesameIcon } from '../../assets/sesame.svg';
import { ReactComponent as FlowerIcon } from '../../assets/flower.svg';
const ProductHomeCard = ({ type, index }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} item xs={12} sm={12} md={3}>
      <Card className={classes.wide} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            #{index + 1}
          </Typography>
          {type.name === 'Coffee' ? (
            <CoffeeIcon />
          ) : type.name === 'Sesame' ? (
            <SesameIcon />
          ) : type.name === 'Flower' ? (
            <FlowerIcon />
          ) : null}
          <Typography variant="h5" component="h2">
            {type.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {type.attributes}
          </Typography>
          <Typography variant="body2" component="p">
            {type.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductHomeCard;
