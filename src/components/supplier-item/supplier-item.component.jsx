import React from 'react';
import useStyles from './supplier-item.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import ListComponent from '../list-item/list-item.component';
import { useHistory, useRouteMatch } from 'react-router-dom';

const CompanyItem = () => {
  const classes = useStyles();
  let history = useHistory();
  let match = useRouteMatch();
  return (
    <div
      className={classes.root}
      onClick={() => history.push(`${match.url}/1`)}
    >
      <Card >
        <CardActionArea >
          <Grid container spacing={2} className={classes.paper}>
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
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CompanyItem;
