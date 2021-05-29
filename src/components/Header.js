import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';

import logo from '../img/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    width: '100%',
    
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
  	  top: '1%',
    },    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#000000',
  },
  menuitem: {
  	color: '#000000',
  	'&:hover': {
       background: "#f00",
    },
  },
  appbardesk: { 	
  	display: 'flex',
  	flexDirection: 'column',
  	justifyContent: 'center',
  	backgroundColor: 'transparent',
  	boxShadow: '0px 0px #ffffff', 	
  },
  logocontainer: {
  	display: 'flex',
  	justifyContent: 'space-between',
  },
  smcontainer: {
  	display: 'flex',
  	justifyContent: 'flex-end',
  },
  menubar: {
  	display: 'flex',
  	justifyContent: 'space-around',
  },
  icon: {
  	color: '#ffffff',
  	margin: '5px',
  },
  logo: {
  	width: '300px'
  }
}));

function MenuAppBar() {
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
	    <Box display={{ xs: 'block', md: 'none', lg: 'none', xl: 'none' }}>
	      	<AppBar position="static" >
		        <Toolbar>
		          	<p className={classes.title}>Sea Secret </p>
		            <div>
		              <IconButton
		                aria-label="menu"
		                aria-controls="menu-appbar"
		                aria-haspopup="true"
		                onClick={handleMenu}
		                color="inherit"
		              >
		                <MenuIcon />
		              </IconButton>
		              <Menu
		                id="menu-appbar"
		                anchorEl={anchorEl}
		                anchorOrigin={{
		                  vertical: 'top',
		                  horizontal: 'right',
		                }}
		                keepMounted
		                transformOrigin={{
		                  vertical: 'top',
		                  horizontal: 'right',
		                }}
		                open={open}
		                onClose={handleClose}
		                TransitionComponent={Fade}
		              >
		                <MenuItem onClick={handleClose}>about</MenuItem>
		                <MenuItem onClick={handleClose}>boat trips</MenuItem>
		                <MenuItem onClick={handleClose}>tours</MenuItem>
		                <MenuItem onClick={handleClose}>gallery</MenuItem>
		                <MenuItem onClick={handleClose}>contact</MenuItem>
		              </Menu>
		            </div>
		        </Toolbar>
	      	</AppBar>
	    </Box>
	    <Box boxShadow={0} display={{ xs: 'none', md: 'block', lg: 'block', xl: 'block' }}>
	      	<AppBar position="relative" className={classes.appbardesk} >
		        <Toolbar className={classes.smcontainer}>
		        	<MailOutlineIcon className={classes.icon} />
		        	<FacebookIcon className={classes.icon} />
		        	<InstagramIcon className={classes.icon} />
		        </Toolbar>
		        <Toolbar className={classes.logocontainer}>
			        <div>
			        	<img src={logo} alt="Sea Secret" className={classes.logo} />				           
			        </div>			        
			        <div className={classes.menubar}>
			        	<div className="container bg-trans">
					    	<a className="link link--menuitem" href="/">about <span></span></a>
							</div>
							<div className="container bg-trans">
							    <a className="link link--menuitem" href="/">boat trips <span></span></a>
							</div>
							<div className="container bg-trans">
							    <a className="link link--menuitem" href="/">tours <span></span></a>
							</div>
							<div className="container bg-trans">
							    <a className="link link--menuitem" href="/">gallery <span></span></a>
							</div>
							<div className="container bg-trans">
							    <a className="link link--menuitem" href="/">contact <span></span></a>
							</div>
			        </div>			        	          
		        </Toolbar>
	      	</AppBar>
	    </Box>
    </div>
  );
}

const Header = () => {
	// const classes = useStyles();
	return (
		<div>
			<MenuAppBar />
		</div>
	)
}

export {Header}
