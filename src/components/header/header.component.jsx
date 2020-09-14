import React from 'react';
import {AppBar,Toolbar, Typography} from '@material-ui/core';
import {Route,Link} from 'react-router-dom';
import useStyles from './header.styles';



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
                <Link className={link} to="/products"> <Typography>Products</Typography> </Link>
                {currentUser.TYPE==='BUYER'?
                <Link className={link} to="/suppliers"> <Typography>Suppliers</Typography> </Link>
                :currentUser.TYPE==='SUPPLIER'?
                <Link className={link} to="/buyers"> <Typography>Buyers</Typography> </Link>
                :null}
                <Link className={link} to="/signup"> <Typography>Signup</Typography> </Link>
                <Link className={link} to="/describe"> <Typography>Describe</Typography> </Link>
           

                
                
            </Route>
           
            
        </Toolbar>

    </AppBar>

        </div>

    
);}


export default Header;