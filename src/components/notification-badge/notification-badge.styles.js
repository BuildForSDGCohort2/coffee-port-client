import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ShowZeroBadge = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge color="secondary" badgeContent={0}>
        <NotificationsIcon />
      </Badge>
    </div>
  );
}

export default ShowZeroBadge;