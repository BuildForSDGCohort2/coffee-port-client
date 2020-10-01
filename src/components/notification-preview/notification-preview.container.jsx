import React from 'react';
import {GET_REQUESTS_BY_USERID} from '../../apollo/request/request.operations';
import {useQuery} from '@apollo/client';
import NotificationPreview from './notification-preview.component';
import {currentUserVar} from '../../apollo/cache'; 

const NotificationPreviewContainer = () =>{
    console.log('current user var',currentUserVar());
    
    const {data,loading} = useQuery(GET_REQUESTS_BY_USERID,{variables:{bySellerId:currentUserVar().id}});
    console.log(data,loading);

    return (<NotificationPreview/>);



}

export default NotificationPreviewContainer;
