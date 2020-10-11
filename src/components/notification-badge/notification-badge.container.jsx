import React from 'react';
import NotificationBadge from './notification-badge.component';
import { getProperty,notificationFilter } from '../notification-preview/notification-preview.utils';
import { GET_REQUESTS_BY_USERID } from '../../apollo/request/request.operations';
import { useQuery } from '@apollo/client';
import GET_CURRENT_USER from '../../apollo/client/queries';


const NotificationBadgeContainer = () =>{
    const { data:userData, loading:userLoading } = useQuery(GET_CURRENT_USER);
    const { currentuser:{role, id} } = userData;
    const { data, loading } = useQuery(GET_REQUESTS_BY_USERID, {
    variables: { ...getProperty(role, id) },
      
    
  });
  console.log("1",userData);
  console.log("2",data,loading);
  if (!loading&&data){
      if (data.requests.__typename==="NotAuthenticatedUserError"){
          console.log("on Not authenticated error");
          return null;
      }
      else if (data.requests.__typename==="Requests"){
        return (<NotificationBadge data={data} badgeContent={notificationFilter(data, role).length}/>);
      }
     
  }
  else{
    console.log("eeeeeeeeeeeeeeeeeeeeeeeee");
      return null;
  }

}

export default NotificationBadgeContainer;