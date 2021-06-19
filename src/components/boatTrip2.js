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
import bg from '../img/bt4.jpg';
import useOnScreen from './functional/useOnScreen';

const useStyles = makeStyles(theme => ({
	root: {
    margin: '50px auto',
    width: '60%',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: '0',
    border: '0',
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
 		width: '100%',
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
		  flexWrap: 'wrap-reverse',
		},
	},
	img: {
		width: '100%',
		height: 400,
		backgroundPosition: 'right',
		backgroundSize: 'contain',
		zIndex: '100',
		[theme.breakpoints.down('sm')]: {
		  width: '100%',
		  backgroundSize: 'contain',
			height: 280,
		},
		[theme.breakpoints.down('md')]: {
	    width: '100%',
	    backgroundSize: 'cover',
			height: 500,
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

function BoatTrip2() {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  return (
    <div className={classes.root}>
    	<Card className={classes.card}>
		    <CardMedia
	        className={classes.img}
	        image={bg}
	        title="TO THE WEST"
			  />	
    		<div ref={ref} className={classes.textcontainer}>
    			{isOnScreen &&
	      		<Reveal duration={1000}  effect="animate__animated animate__fadeInDown">
							<p className="strike strike-btl trip-title">TO THE WEST</p>
						</Reveal>
					}
					<p className={classes.subtitle}>
						<br/><br/>
					</p>
					<p className={classes.text}>							
							We pass Paros at the southernmost point and head towards Tigani and Panderonissi, which are, because of
							the crystal clear waters and colors, known as “the Blue Lagoon” islands. They are deliciously perfect for
							a swim and snorkeling trip but also very nice on windy days for all wind related sports.							
					</p>
					<p className={classes.text}>							
							While snorkeling through the little rock formations in the turquoise waters; you can additionally voyage
							through several small underwater biotopes. Around the south of Antiparos we will visit another lagoon between
							Antiparos and Despotiko, where it’s also possible to visit the interesting archaeological site of Despotiko.							
					</p>
					<p className={classes.text}>							
						(Lunch will be in a Tavern in Antiparos, shared cost)
						<br/><br/>							
					</p>
					<CardActions className={classes.cardbtnarea}>
	        	<BookModal />
        	</CardActions>
			</div>		
    </Card>
</div>
  );
}

export {BoatTrip2};
