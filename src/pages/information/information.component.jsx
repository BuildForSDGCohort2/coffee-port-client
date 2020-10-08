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
          {coffee.coffeeCharacteristics.map((desc)=>
                      <Typography className={classes.description}>
                            {desc}
                      </Typography>)}

          </Grid>
          <Grid>
            {' '}
            <Typography className={classes.subtitle} variant="h4">
              Coffee Designation
            </Typography>
          </Grid>
          <Grid>
            {' '}
            {coffee.coffeeDesignations.map((paragraph)=>(
               <Typography className={classes.description}>
                  {paragraph}
               </Typography>
            ))}
           
            <Grid  
            className={classes.listContainer}
            container
              direction="column"
              justify="center"
              alignItems="center">
                <Grid container item xs={8}>
            {coffee.coffeeDesignationsList.map((item=>(
              <Grid item >
              <Typography className={classes.list}>
              {`${item[0]}: ${item[1]}`}
            </Typography>
              </Grid>

            )))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Information;
