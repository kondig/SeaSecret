import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Reveal from 'react-reveal';
import "animate.css/animate.min.css";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';

import bg from '../img/bt1.jpg';

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
	},
	img: {		
		width: '60%',
		height: 500,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		zIndex: '100',
		// animation: 'animatedRtL 2s ease-in 1 normal',
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

function BoatTrip1() {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  return (
    <div ref={ref} className={classes.root}>
    	<Card className={classes.card}>   	
      		<div  className={classes.textcontainer}>
      			{isOnScreen &&
	      			<Reveal duration={1000}  effect="animate__animated animate__fadeInDown">
						<p className="strike strike-btr trip-title">TO THE NORTH</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.subtitle}>
							Choose between the following destinations
							<br/><br/>							
						</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>							
							Snorkel trip to the shipwreck Mariana and the bird island Glaronissi							
						</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>							
							Alyko/Pyrgaki for snorkeling and cliff jumping							
						</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>							
							Paros, Naoussa for snorkeling and lunch							
						</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>							
							Paros, Naoussa for sunset and dinner
							<br/><br/>							
						</p>
					</Reveal>
				}
				<CardActions className={classes.cardbtnarea}>
		        	<Button size="large" className={classes.btn} >
		          		book now
		        	</Button>
	        	</CardActions>							
			</div>
			{isOnScreen &&
				<Zoom  in={true} timeout={1000}>
			        <CardMedia
				        className={classes.img}
				        image={bg}
				        title="TO THE NORTH"
				    />	
			    </Zoom>
			}
      	</Card>	
</div>
  );
}

export {BoatTrip1};