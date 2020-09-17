import React from 'react';
import {AppBar,Toolbar, Typography} from '@material-ui/core';
import {Route,Link} from 'react-router-dom';
import {getUser,logout} from "./header.utils"
import useStyles from './header.styles';
import CustomToggleMenu from '../custom-toggle-menu/custom-toggle-menu.component';
import NotificationBadge from '../notification-badge/notification-badge.component';



const Header=()=>{
    const {root,logo,link}=useStyles();
    const currentUser={TYPE:'SUPPLIER'}
    const token=getUser();
    
    return( 
    <div className={root}>
            <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none',borderBottom:'solid',borderBottomColor:'#546e7a22',borderWidth:'thin'}}>
        <Toolbar>
          <Typography className={logo}>Logo</Typography>

            <Route>
                <Link className={link} to="/"> <Typography className={linkText} >Home</Typography> </Link>
                <Link className={link} to="/product"> <Typography className={linkText}>Products</Typography> </Link>
                {currentUser.TYPE==='BUYER'?
                <Link className={link} to="/supplier"> <Typography className={linkText}>Suppliers</Typography> </Link>
                :currentUser.TYPE==='SUPPLIER'?
                <Link className={link} to="/buyer"> <Typography className={linkText}>Buyers</Typography> </Link>
                :null}
<<<<<<< HEAD
                <Link className={link} to="/signup"> <Typography className={linkText}>Signup</Typography> </Link>
                <Link className={link} to="/notification"> <NotificationBadge/> </Link>
                <div className={link} to="/signup"> <CustomToggleMenu/> </div>
=======
                {!token? <Link className={link} to="/Signup"> <Typography>Sign in</Typography> </Link>:<Link className={link} onClick={() =>logout()}> <Typography>Sign out</Typography> </Link>
                }
              
    
>>>>>>> develop
           

                
                
            </Route>
           
            
        </Toolbar>

    </AppBar>

        </div>

    
);}


export default Header;