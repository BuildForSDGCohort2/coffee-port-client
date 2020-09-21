import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GET_CURRENT_USER from '../../apollo/queries';

const Authenticated = ({ Component }) => {
  const { data } = useQuery(GET_CURRENT_USER);
  if (!data.currentuser.loggedIn) return <Redirect to="signup" />;
  return <Component />;
};
export default Authenticated;
