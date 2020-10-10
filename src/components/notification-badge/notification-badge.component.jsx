import React,{useEffect} from 'react';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './notification-badge.container';


const NotificationBadge = ({data,badgeContent}) => {
  const classes = useStyles();
  console.log(data,"notificationBadge");
  return (
        <div onClick={(e)=>console.log('Clickeddddddddddd')} className={classes.root}>
          <Badge
            color="secondary"
            badgeContent={badgeContent}
          >
            <NotificationsIcon style={{ color: '#546e7a' }} />
          </Badge>
        </div>
      );
  // if (loading && id)
  //   return (
  //     <div className={classes.root}>
  //       <Badge color="secondary" badgeContent={0}>
  //         <NotificationsIcon style={{ color: '#546e7a' }} />
  //       </Badge>
  //     </div>
  //   );

  // if (data && data.requests.__typename === 'Requests') {
  //   return (
  //     <div onClick={(e)=>console.log('Clickeddddddddddd')} className={classes.root}>
  //       <Badge
  //         color="secondary"
  //         badgeContent={badgeContent}
  //       >
  //         <NotificationsIcon style={{ color: '#546e7a' }} />
  //       </Badge>
  //     </div>
  //   );
  // } else {
  //   return null;
  // }
};

export default NotificationBadge;
