import React from 'react';
import { useQuery } from '@apollo/client';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Route, Link } from 'react-router-dom';
import { logout } from '../../utils';
import GET_CURRENT_USER from '../../apollo/client/queries';
import { DELETE_USER } from '../../apollo/server/mutations';
import { useMutation } from '@apollo/client';

import useStyles from './header.styles';
import CustomToggleMenu from '../custom-toggle-menu/custom-toggle-menu.component';
import NotificationBadge from '../notification-badge/notification-badge.component';

const Header = () => {
  const { root, logo, link, linkText } = useStyles();
  
  // const [deleteUser, {  loading, error }] = useMutation(
  //   DELETE_USER,
  // );
  // deleteUser();
  // console.log( loading, error);
  
  const currentUser = { TYPE: 'BUYER' };
  const { data } = useQuery(GET_CURRENT_USER);
  const loggedIn = data.currentuser.loggedIn;
  return (
    <div className={root}>
      <AppBar
        position="static"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          borderBottom: 'solid',
          borderBottomColor: '#546e7a22',
          borderWidth: 'thin',
        }}
      >
        <Toolbar>
          <Typography className={logo}>Logo</Typography>

          <Route>
            <Link className={link} to="/">
              {' '}
              <Typography className={linkText}>Home</Typography>{' '}
            </Link>
            <Link className={link} to="/products">
              {' '}
              <Typography className={linkText}>
                Products
              </Typography>{' '}
            </Link>
            {currentUser.TYPE === 'BUYER' ? (
              <Link className={link} to="/suppliers">
                {' '}
                <Typography className={linkText}>
                  Suppliers
                </Typography>{' '}
              </Link>
            ) : currentUser.TYPE === 'SUPPLIER' ? (
              <Link className={link} to="/buyers">
                {' '}
                <Typography className={linkText}>
                  Buyers
                </Typography>{' '}
              </Link>
            ) : null}
            <Link className={link} to="/notification">
              {' '}
              <NotificationBadge />{' '}
            </Link>
            {loggedIn ? (
              <div className={link} to="/signup">
                {' '}
                <CustomToggleMenu
                  currentUser={data.currentuser}
                />{' '}
              </div>
            ) : null}
            {!loggedIn ? (
              <Link className={link} to="/Signup">
                {' '}
                <Typography className={linkText}>
                  Sign in
                </Typography>{' '}
              </Link>
            ) : (
              <Link className={link} onClick={() => logout()}>
                {' '}
                <Typography className={linkText}>
                  Sign out
                </Typography>{' '}
              </Link>
            )}
          </Route>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
