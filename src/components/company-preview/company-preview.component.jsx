import React from 'react';
import CompanyItem from '../supplier-item/supplier-item.component';
import Grid from '@material-ui/core/Grid';
import useStyles from './company-preview.styles';

const CompanyPreview = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map((user) => (
          <Grid item xs={4}>
            <CompanyItem user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CompanyPreview;
