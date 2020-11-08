import React from 'react'; 
import '../App.css';
import header from '../assets/elements/header-2.svg';
import logo from '../assets/logo.svg'

import purpose from '../assets/purpose.svg'
import Grid from '@material-ui/core/Grid';
import useStyles from '../utils/styles';
import { Box,   Button,   Hidden,   IconButton,   Link,  Menu,  MenuItem,  Typography } from '@material-ui/core';

import Slide from 'react-reveal/Slide'; 
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { Link as RouteLink }  from "react-router-dom";


function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
  return (
    <div className="header">
        <img src={header} className="headerBackground" />
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}   style={{textAlign: 'center'}}>
                    <Link href="https://www.hkscan.com/en/"  color="inherit">
                        <img src={logo} className="logoHeader" />
                    </Link> 
                </Grid>
                <Grid item xs={12} md={4}   style={{textAlign: 'center'}}> 
                        <img src={purpose} className="purposeHeader" /> 
                </Grid>
                <Hidden mdDown>
                    <Grid item xs={12} md={4}   style={{textAlign: 'center'}}>
                <ul className="menu">
                    <li>
                        <Link href="https://www.hkscan.com/en/"  color="inherit">
                            {'Our Site'}
                        </Link> 
                    </li>
                    <li>
                        <Link href="https://www.hkscan.com/en/"  color="inherit">
                            {'About us'}
                        </Link> 
                    </li>
                    <li>
                        <Link href="/statistic"  color="inherit">
                            {'Statistic'}
                        </Link> 
                    </li>
                    <li>
                        <Link href="/code-generator"  color="inherit">
                            {'Code Generator'}
                        </Link> 
                    </li>
                    <li>
                        <Link href="/product-generator"  color="inherit">
                            {'Product Generator'}
                        </Link> 
                    </li>
                </ul>
                </Grid>
                </Hidden>
                <Hidden mdUp>
                    <IconButton style={{position: 'absolute', top: 0, right: 0}} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClickMenu}>
                        {open ? ( 
                                <CloseIcon /> 
                        ) : ( 
                                <MenuIcon /> 
                        )}
                         
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Hidden>
                <Grid item md={6}  /> 
                <Grid item xs={12} md={6} style={{textAlign: 'left'}}> 
                    <Slide right>
                        <Typography variant='h1' className="mainH">
                            Find out <b>MORE DETAIL</b> about this product. 
                        </Typography> 
                        <Typography variant='h3' className="mainDescr">
                            From farm to counter. 
                        </Typography> 
                    </Slide>
                </Grid> 
            </Grid>
        </div> 
    </div>
  );
}

export default Header;
