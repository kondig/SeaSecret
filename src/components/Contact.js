import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "animate.css/animate.min.css";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Zoom from '@material-ui/core/Zoom';
import {BookInvModal} from './bookInvModal';
import bg from '../img/contact.jpg';

import useOnScreen from './functional/useOnScreen';

const useStyles = makeStyles(theme => ({
	root: {
    margin: '0 auto',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'start',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    borderRadius: '0',
    border: '0',	
    position: 'relative',    
		[theme.breakpoints.down('sm')]: {
	      flexWrap: 'wrap',
	      minHeight: '750px',
	  },
	},
	container: {
	    flexBasis: '100%',
	    backgroundColor:'#transparent'
	},
	textcontainer: {
		padding: '40px 25px',
 		width: '30%',
 		[theme.breakpoints.down('sm')]: {
		    padding: '0px 10px',
		    width: '100%',
		},
	},
	text: {
		textAlign: 'left',
		fontSize: '1.0em',
	},
	title: {
		textAlign: 'left',
		fontSize: '1.5em',
	},	
  htext: {
  	textAlign: 'left',
		fontSize: '1.3em',
  },
	subtitle: {
		textAlign: 'left',
		fontSize: '1.0em',
		marginTop: '10px',
	},
	card: {
		display: 'flex',
		flexWrap: 'nowrap',
		justifyContent: 'flex-end',
		width: '100%',
		overflow: 'visible',
		boxShadow: '0 0 0 0',
		maxWidth: 800,
		position: 'relative',
		zIndex: 15,
		margin: '3vw 0',
		[theme.breakpoints.down('sm')]: {
		    justifyContent: 'center',
		    flexWrap: 'wrap-reverse',
		    height: '880px',
		},
	},
	img: {		
		width: '100%',
		height: 400,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		zIndex: '100',
		// animation: 'animatedRtL 2s ease-in 1 normal',
	},
	btn: {
  	backgroundColor: '#ffffff',
  	color: '#000000',
    textTransform: 'lowercase',
    '&:hover': {
      backgroundColor: '#1bdcd1',
      color: '#000000',
  	},
  	'&:after': {
      content: '""',
      position: 'absolute',
      height: '2px',
      width: '100%',
      background: 'rgba(0, 0, 0, 0.87)',
      animationDuration: '3s',
      animationTimingFunction: 'ease-in',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: 'strikeBook',
      top: '-40%', 
      left: '-60%',
      backgroundColor: '#ffffff',  
    }
  },
  cardbtnarea: {
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '15px 0px',
		marginTop: '15px',
		[theme.breakpoints.down('md')]: {
		    padding: '15px 10px',
		},
		[theme.breakpoints.up('md')]: {
		    padding: '15px 0px',
		},
  },
  letter: {
		fontSize: '10em',
		margin: '10px',
		position: 'relative',
		left: '0'
	},
	imagearea: {
 		width: '40%',
 		[theme.breakpoints.down('sm')]: {
		    width: '100%',
		},
  },
  letterabs: {
  	position: 'absolute',
  	left: '-20%',
  	top: '2%',
  	[theme.breakpoints.down('sm')]: {
		    left: '0%',
  			top: '3%',
  			fontSize: '7px',
		},
		[theme.breakpoints.down('lg')]: {
		    left: '0%',
		},
		[theme.breakpoints.up('lg')]: {
		    left: '-20%',
		},
  },
  banner: {
  	position: 'absolute',
  	bottom: 0,
  	backgroundColor: '#000000',
  	width: '100%',
  	display: 'flex',
		justifyContent: 'center',
  },
  wtext: {
  	color: '#ffffff',
  	textAlign: 'left',
		fontSize: '1.0em',
		display: 'flex',
		justifyContent: 'flex-start',
		padding: '30px',
		width: 800,
		[theme.breakpoints.down('sm')]: {
		    width: '100%',
		},
  },
  contactheading: {
  	width: '30%',
  	textAlign: 'left',
  	fontSize: '1.3em',
  	// display: 'flex',
  	// flexDirection: 'column',
  	// justifyContent: 'center',
  	position: 'absolute',
  	bottom: '20%',
  	left: 0,
  	[theme.breakpoints.down('sm')]: {
		    left: '30px',
		},
		[theme.breakpoints.up('sm')]: {
		    left: '10px',
		},
		[theme.breakpoints.up('md')]: {
		    left: 0,
		    bottom: '35%',
		},
  }
}));

function Contact() {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  return (
    <div className={classes.root}>

    	<Card className={classes.card}>
    		<div ref={ref} className={classes.letterabs} >
	    		{isOnScreen &&
	    			<div className="strike strike-Con"> 
							  <div className={classes.letter}>C</div>
						</div>
					}
				</div>
				<div className={classes.contactheading}>
					CONTACT
				</div>
    		<div className={classes.imagearea}>
		      <CardMedia
			        className={classes.img}
			        image={bg}
			        title="Why book with us"
			    />
			    <CardActions className={classes.cardbtnarea}>
		        	<BookInvModal />
			    </CardActions>
			  </div>				 
	      <div className={classes.textcontainer}>
					<p className={classes.htext}>WHY BOOK WITH US</p>
					<p className={classes.text}>							
						<br/><br/>
						brand new boat							
					</p>
					<p className={classes.text}>							
						explore the best spots							
					</p>
					<p className={classes.text}>							
						lots of different tours						
					</p>
					<p className={classes.text}>							
						25 years of sailing experience in the Cyclades							
					</p>						
				</div>			
    </Card>
    <div className={classes.banner}>
    	<p className={classes.wtext}>							
				Jan Andres
				<br/>
				St.George Beach
				<br/>
				84300 Naxos
				<br/>
				0030 6937425207
				<br/>
				info@seasecret-boattrips.com						
			</p>	
    </div>	
	</div>
  );
}

export {Contact};