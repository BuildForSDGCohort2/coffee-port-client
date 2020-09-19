import React from "react"
import {Redirect} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GET_CURRENT_USER from "../../apollo/queries"
const Authenticated=({Component})=>{
    console.log("here");
    const { data, loading, error } = useQuery(GET_CURRENT_USER);
    console.log("nothing")
    console.log(data,loading,error);
    
//  if(!data.currentuser.token) return <Redirect to='signup' />
 return <Component/>
}
export default Authenticated;
