import React from 'react';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './notification-badge.styles';

const NotificationBadge = ()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge color="secondary" badgeContent={3}>
        <NotificationsIcon style={{color:'#546e7a'}}/>
      </Badge>
    </div>
  );
}

export default NotificationBadge;