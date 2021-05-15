import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
	root: {
	    margin: '0 auto',
	    display: 'flex',
	    alignItems: 'start',
	    flexDirection: 'column',
	    flexWrap: 'nowrap',
	    borderRadius: '0',
	    border: '0',
	    backgroundColor: 'transparent',
	    '&:hover': {
		      backgroundColor: '#ffffff'
		    },
		[theme.breakpoints.down('sm')]: {
		      flexWrap: 'wrap',
		    },
	},
	container: {
	    flexBasis: '100%',
	    backgroundColor:'#ffffff'
	},
	letter: {
		fontSize: '10em',
		margin: '10px auto',
	},
	textcontainer: {
		padding: '20px 20%',
	},
	text: {
		textAlign: 'left',
		fontSize: '1.0em',
	},
	title: {
		textAlign: 'left',
		fontSize: '1.5em',
	},
}));

function Section() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    	<Card className={classes.card}>
	    	<ScrollAnimation animateIn="fadeInLeft" className={classes.container} duration="2" >
	      		<div className={classes.letter}>A</div>
	      	</ScrollAnimation>
	      	<ScrollAnimation animateIn="fadeInRight" className={classes.container} duration="2" >
	      		<div className={classes.textcontainer}>
					<p className={classes.title}>ADVENTURE</p>
					<p className={classes.text}>
						Beyond the beauty of Naxos that you've probably already experienced, there's a whole new world hidden in the 
						secret corners that only few people can reach. Let us show you the SEA SECRETS of the island, the hidden
						treasures that will create your most unique summer memories.
					</p>
				</div>
	      	</ScrollAnimation>
      	</Card>	
    </div>
  );
}

export {Section};