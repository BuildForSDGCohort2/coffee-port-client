import React from 'react';
import useStyles from './footer.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Typography className={classes.text}>
          Website By | TeamAbyssinia
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
