import React from 'react';
import { useQuery } from '@apollo/client';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Route, Link } from 'react-router-dom';
import { logout } from '../../utils';
import GET_CURRENT_USER from '../../apollo/client/queries';
import useStyles from './header.styles';
import CustomToggleMenu from '../custom-toggle-menu/custom-toggle-menu.component';
import NotificationBadgeContainer from '../notification-badge/notification-badge.container';

const Header = () => {
  const { root,appBar, logo, link, linkText } = useStyles();
  const { data ,loading} = useQuery(GET_CURRENT_USER);
  const loggedIn = data.currentuser.loggedIn;
  return (
    <div className={root}>
      <AppBar
        position="static"
        className={
          appBar
        }
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
           
              <Link className={link} to="/suppliers">
                {' '}
                <Typography className={linkText}>
                  Suppliers
                </Typography>{' '}
              </Link>
            
            <Link className={link} to="/notification">
              {' '}
              {((!loading)&&(data.currentuser.id))?<NotificationBadgeContainer userData={data}/>:null}
              {' '}
            </Link>
            {loggedIn ? (
              <div className={link} to="/profile">
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
