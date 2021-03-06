import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Reveal from 'react-reveal';
import "animate.css/animate.min.css";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Zoom from '@material-ui/core/Zoom';
import {BookModal} from './bookModal';
import bg from '../img/bt3.jpeg';
import useOnScreen from './functional/useOnScreen';

const useStyles = makeStyles(theme => ({
	root: {
    margin: '50px auto',
    width: '70%',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: '0',
    border: '0',
    overflow: 'hidden',	    
    '&:hover': {
      backgroundColor: '#ffffff'
    },
		[theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      width: '95%',
      overflow: 'hidden',
    },
	},
	container: {
	    flexBasis: '100%',
	    backgroundColor:'#transparent'
	},
	textcontainer: {
		padding: '0px 25px',
 		width: '40%',
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
		[theme.breakpoints.down('sm')]: {
		  flexWrap: 'wrap',
		},
	},
	img: {		
		width: '60%',
		height: 500,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		zIndex: '100',
		[theme.breakpoints.down('sm')]: {
		  width: '100%',
			height: 400,
		},
	},
	btn: {
	  	backgroundColor: '#000000',
	  	color: '#ffffff',
	    textTransform: 'lowercase',
	    '&:hover': {
	      backgroundColor: '#1bdcd1',
	      color: '#000000',
    	},
    },
    cardbtnarea: {
  		display: 'flex',
  		justifyContent: 'flex-start',
  		padding: '15px 0px',
    },
}));

function BoatTrip3() {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref)
  return (
    <div className={classes.root}>
    	<Card className={classes.card}>   	
    		<div ref={ref} className={classes.textcontainer}>
    			{isOnScreen &&
      			<Reveal duration={1000}  effect="animate__animated animate__fadeInDown">
							<p className="strike strike-btr trip-title">TO THE SOUTH</p>
						</Reveal>
					}
					<p className={classes.subtitle}>
						<br/><br/>							
					</p>
					<p className={classes.text}>							
							Our first stop will be at Rina bay in the south of Naxos, where we can snorkel in a nice cave and explore the
							underwater spring.						
					</p>
					<p className={classes.text}>							
							Crossing over to Pano - and Kato Koufonissi, the two great islands hosting beautiful beaches, caves and cliffs
							(great for cliff jumping). There are also very nice snorkel sites at the bay of Pori where we can then visit a
							beautifully situated tavern. This tour also holds good possibilities for all wind related sports with flat
							 water in the bay or in waves just outside of it.						
					</p>
					<p className={classes.text}>							
						(Lunch will be in a Tavern - shared cost)
						<br/><br/>							
					</p>
					<CardActions className={classes.cardbtnarea}>
	        	<BookModal />
        	</CardActions>							
				</div>
				<CardMedia
		        className={classes.img}
		        image={bg}
		        title="TO THE SOUTH"
				/>			
		  </Card>	
		</div>
  );
}

export {BoatTrip3};