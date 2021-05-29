import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';



function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="left">
      {'Copyright © '}
      <Link color="inherit" href="#">
        {new Date().getFullYear()} SEASECRET BOAT TRIPS
      </Link>{' '}      
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100px',
    backgroundColor: '#000000',
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: '10px',
    backgroundColor: '#000000',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between'
  },
  cr: {
    color: "#ffffff",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '40px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '5px',
    }
  },
  smcontainer: {
    display: 'flex',
    justifyContent: 'end',
  },
  icon: {
    color: '#ffffff',
    margin: '5px',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer} id="contact">
        <div className={classes.cr}>
          <Copyright  />
        </div>       
        <Toolbar className={classes.smcontainer}>
          <Link color="inherit" href="#">
            <MailOutlineIcon className={classes.icon} />
          </Link>
          <Link color="inherit" href="#">
            <FacebookIcon className={classes.icon} />
          </Link>
          <Link color="inherit" href="#">
            <InstagramIcon className={classes.icon} />
          </Link>
        </Toolbar>
      </footer>
    </div>
  );
}

export {Footer};
