import React from 'react';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './notification-badge.styles';
import {currentUserVar} from '../../apollo/cache';
import {GET_REQUESTS_BY_USERID} from '../../apollo/request/request.operations';
import {useQuery} from '@apollo/client';
import {notificationFilter,getProperty} from '../notification-preview/notification-preview.utils';

const NotificationBadge = ()=> {
  const classes = useStyles();
  const {role,id}=currentUserVar();
 const {data,loading} = useQuery(GET_REQUESTS_BY_USERID,{variables:{...getProperty(role,id)}});



 if (loading) return ( <div className={classes.root}>
  <Badge color="secondary" badgeContent={0}>
    <NotificationsIcon style={{color:'#546e7a'}}/>
  </Badge>
</div>)

if ( id && data && data.requests.__typename === 'Requests') {
  return (
    <div className={classes.root}>
      <Badge color="secondary" badgeContent={notificationFilter(data,role).length} >
        <NotificationsIcon style={{color:'#546e7a'}}/>
      </Badge>
    </div>
  );
              
}
else{
  return null
}

}

export default NotificationBadge;