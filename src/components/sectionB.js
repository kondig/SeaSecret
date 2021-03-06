import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Reveal from 'react-reveal';
import "animate.css/animate.min.css";

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import bg from '../img/s2p2.jpg';

import useOnScreen from './functional/useOnScreen';

const useStyles = makeStyles(theme => ({
	root: {
    margin: '0 auto 180px auto',
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
      overflow: 'hidden',
    },    
	},
	container: {
	    flexBasis: '100%',
	    backgroundColor:'#transparent'
	},
	letter: {
		fontSize: '10em',
		margin: '35px 0 0 0',
		position: 'relative',
		left: 'calc(-20vw)',
		[theme.breakpoints.down('sm')]: {
	    fontSize: '6em',
	  },
	},
	textcontainer: {
		
		width: '50%',
		[theme.breakpoints.down('sm')]: {
	    width: '100%',
	  },
	  [theme.breakpoints.down('md')]: {
	    width: '100%',
	  },				
	},
	text: {
		textAlign: 'left',
		fontSize: '1.0em',
		margin: '10px 15px',
	},
	title: {
		textAlign: 'left',
		fontSize: '1.5em',
		padding: '0px 15px',
	},
	card: {
		display: 'flex',
		justifyContent: 'flex-end',
		boxShadow: '0 0 0 0',
		borderRadius: '0',
		// backgroundImage: `url(${bg})`,
		// backgroundPosition: '0% 0%',
		// backgroundAttachment: 'scroll',
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: '50%',
		// animation: 'animatedLtR 2s ease-in 1 normal',
		[theme.breakpoints.down('sm')]: {
	    flexWrap: 'wrap-reverse',
	      justifyContent: 'center',
	  },
	  [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap-reverse',
    },
	},
	img: {
		margin: '0 0 0 0',
		width: '50%',
		height: 400,
		verticalAlign: 'text-bottom',
		[theme.breakpoints.down('sm')]: {
	      width: '100%',
	      height: 200,
	      backgroundSize: 'contain',
	  },
	  [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 500,
      backgroundSize: 'cover',
    },
	}
}));



function SectionB() {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref)
  return (
    <div className={classes.root}>
    	<Card className={classes.card}>
    		<CardMedia
	        className={classes.img}
	        image={bg}
	        title=""
	    	/> 	
      	<div ref={ref} className={classes.textcontainer}>
      			
						<p className={classes.title}>EXPLORE</p>
						<p className={classes.text}>
							From leisure trips with snorkeling, swimming and sunbathing, to explore trips where we discover islands you???ve never
							heard of, to private charters and transfers, and to adventure trips where we dive into water sports getaways, you
							have the privilege to choose the trip that suits your interests best; we will create the opportunity for you to jump into
							unforgettable moments for you and your close ones.
						</p>
						{isOnScreen ?
	    				<div className="strike strike-E"> 
								<Reveal duration={2000} effect="animate__animated animate__fadeIn">
								  <div className={classes.letter}>E</div>
								</Reveal>
							</div>
							:
							<div  className={classes.letter}>E</div>
						}						
				</div>				
      </Card>	
		</div>
  );
} 

export {SectionB};