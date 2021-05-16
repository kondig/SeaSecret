import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// import Tooltip from '@material-ui/core/Tooltip';



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
    backgroundColor: '#7990a8',
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#000000',
    color: '#ffffff'
  },
  icon: {
    color: "#ffffff",
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer} id="contact">
        <Container maxWidth="lg" >
          <Copyright className={classes.icon} />
        </Container>
      </footer>
    </div>
  );
}

export {Footer};
