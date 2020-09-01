import React from 'react';
import {AppBar,Toolbar, Typography} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Route,Link} from 'react-router-dom';
import useStyles from './header.styles';



const Header=()=>{
    const {root,logo,link}=useStyles();
    return( 
    <div className={root}>
            <AppBar position='static'>
        <Toolbar>
          <Typography className={logo}>Logo</Typography>

            <Route>
                <Link className={link} to="/"> <Typography >Home</Typography> </Link>
                <Link className={link} to="/products"> <Typography>Products</Typography> </Link>
                <Link className={link} to="/buyers"> <Typography>Buyers</Typography> </Link>
                <Link className={link} to="/suppliers"> <Typography>Suppliers</Typography> </Link>
            </Route>
            <KeyboardArrowDownIcon/>
            
        </Toolbar>

    </AppBar>

        </div>

    
);}


export default Header;