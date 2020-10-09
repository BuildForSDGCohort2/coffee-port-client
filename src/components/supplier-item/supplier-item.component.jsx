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

const CompanyItem = ({ user }) => {
  const classes = useStyles();
  let history = useHistory();
  let match = useRouteMatch();
  return (
    <div
      className={classes.root}
      onClick={() => history.push(`${match.url}/${user.id}`)}
    >
      <Card>
        <CardActionArea>
          <Grid container spacing={2} className={classes.paper}>
            <Grid item xs>
              <Typography className={classes.title} component="h1">
                {user.company.companyName}
              </Typography>
              <Rating name="read-only" value={3} readOnly />
{user.products.length>0? <Grid>
  {user.products.map((product)=><Chip color="secondary" label={product.productName} />)}
             
              </Grid>:null}
             

              <ListComponent
                avatar
                sales
                primary="Total sales"
                secondary="13 items"
              />
              {/* <Typography variant="body2" color="textSecondary">
                {user.id}
              </Typography> */}
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CompanyItem;
