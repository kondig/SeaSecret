import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import ImageGridList from './functional/grid';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100px',
    backgroundColor: '#ffffff',
    marginTop: '40px',
  },
}));

function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="xl" >
          <ImageGridList />
        </Container>
    </div>
  );
}

export {Gallery};
