import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { logout } from '../../utils';
import GET_CURRENT_USER from '../../apollo/client/queries';

const Authenticated = ({ Component }) => {
  const { data } = useQuery(GET_CURRENT_USER);
  const token = window.localStorage.getItem('token');
    if (token) {
      const expireDate = window.localStorage.getItem('expire');
      const now = new Date();
      if (now.getTime() >= expireDate) {
        logout();
        return <Redirect to="/signup" />
      }
    }
  if (!data.currentuser.loggedIn) return <Redirect to="/signup" />;
  return <Component />;
};
export default Authenticated;
