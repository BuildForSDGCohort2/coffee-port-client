import React from 'react';
import COFFEE_DATA from '../../data/coffee.data';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './information.styles';

const Information = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      {COFFEE_DATA.Description.map((coffee) => (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid>
            <Typography className={classes.title} variant="h3">
              {coffee.title}
            </Typography>
          </Grid>
          <Grid>
            {' '}
            <Typography className={classes.subtitle} variant="h4">
              Coffee Characteristics
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.description}>
              {coffee.coffeeCharacteristics}
            </Typography>
          </Grid>
          <Grid>
            {' '}
            <Typography className={classes.subtitle} variant="h4">
              Coffee Designation
            </Typography>
          </Grid>
          <Grid>
            {' '}
            <Typography className={classes.description}>
              {coffee.coffeeDesignations}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Information;
