import React from 'react';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './notification-badge.styles';
import {currentUserVar} from '../../apollo/cache';
import {GET_REQUESTS_BY_USERID} from '../../apollo/request/request.operations';
import {useQuery} from '@apollo/client';

const NotificationBadge = ()=> {
  const classes = useStyles();
  let property={};
  console.log()
  const {role,id}=currentUserVar();
  if (role==='SUPPLIER'){
      property.requestsBySellerId=id;
  }
  else if (role==='BUYER'){
      property.requestsByBuyerId=id;
  }
 const {data,loading} = useQuery(GET_REQUESTS_BY_USERID,{variables:{...property}});
 if (loading) return (    <div className={classes.root}>
  <Badge color="secondary" badgeContent={0}>
    <NotificationsIcon style={{color:'#546e7a'}}/>
  </Badge>
</div>)


if (data.requests.__typename === 'Requests'&& id) {
  return (
    <div className={classes.root}>
      <Badge color="secondary" badgeContent={data.requests.requests.length}>
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