import React from 'react';
import {AppBar,Toolbar, Typography} from '@material-ui/core';
import {Route,Link} from 'react-router-dom';
import useStyles from './header.styles';
import CustomToggleMenu from '../custom-toggle-menu/custom-toggle-menu.component';
import NotificationBadge from '../notification-badge/notification-badge.component';



const Header=()=>{
    const {root,logo,link}=useStyles();
    const currentUser={TYPE:'SUPPLIER'}
    
    return( 
    <div className={root}>
            <AppBar position='static'>
        <Toolbar>
          <Typography className={logo}>Logo</Typography>

            <Route>
                <Link className={link} to="/"> <Typography >Home</Typography> </Link>
                <Link className={link} to="/product"> <Typography>Products</Typography> </Link>
                {currentUser.TYPE==='BUYER'?
                <Link className={link} to="/supplier"> <Typography>Suppliers</Typography> </Link>
                :currentUser.TYPE==='SUPPLIER'?
                <Link className={link} to="/buyer"> <Typography>Buyers</Typography> </Link>
                :null}
                <Link className={link} to="/signup"> <Typography>Signup</Typography> </Link>
                <Link className={link} to="/notification"> <NotificationBadge/> </Link>
                <div className={link} to="/signup"> <CustomToggleMenu/> </div>
           

                
                
            </Route>
           
            
        </Toolbar>

    </AppBar>

        </div>

    
);}


export default Header;