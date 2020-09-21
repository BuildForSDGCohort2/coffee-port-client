import React from 'react';
import useStyles from './supplier-item.styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';
import ListComponent from '../list-item/list-item.component';

const CompanyItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Typography component="h1">Company Name</Typography>
            <Rating name="read-only" value={3} readOnly />

            <Grid>
              <Chip color="primary" label="Coffee" />
              <Chip color="primary" label="Flower" />
            </Grid>

            <ListComponent
              avatar
              sales
              primary="Total sales"
              secondary="13 items"
            />
            <Typography variant="body2" color="textSecondary">
              ID: 1030114
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CompanyItem;
