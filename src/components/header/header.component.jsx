import React from 'react';
import {AppBar,Toolbar, Typography} from '@material-ui/core';
import {Route,Link} from 'react-router-dom';
import {getUser,logout} from "./header.utils"
import useStyles from './header.styles';



const Header=()=>{
    const {root,logo,link}=useStyles();
    const currentUser={TYPE:'SUPPLIER'}
    const token=getUser();
    
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
                {!token? <Link className={link} to="/Signup"> <Typography>Sign in</Typography> </Link>:<Link className={link} onClick={() =>logout()}> <Typography>Sign out</Typography> </Link>
                }
              
    
           

                
                
            </Route>
           
            
        </Toolbar>

    </AppBar>

        </div>

    
);}


export default Header;