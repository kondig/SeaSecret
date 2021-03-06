import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Reveal from 'react-reveal';
import "animate.css/animate.min.css";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Zoom from '@material-ui/core/Zoom';

import bg from '../img/bt1.jpg';
import {BookModal} from './bookModal';
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
						<p className={classes.subtitle}>
							<br/><br/>							
						</p>
						<p className={classes.text}>							
							The North tour leads us towards Delos, Rineia and Mykonos. Rineia has some of the most beautiful small
							bays and beaches in the Aegean for snorkeling, swimming and relaxing but also features very good spots
							for wind related sports with flat water or waves. We can also combine a stopover to the island Delos and
							explore the archaeological site, which is very spectacular and really worth a visit!							
						</p>
						<p className={classes.text}>							
							(There are no Taverns in Rineia or Delos, but we will take sandwiches with us - shared cost)
							<br/><br/>							
						</p>
				<CardActions className={classes.cardbtnarea}>
        	<BookModal />
	      </CardActions>							
			</div>
			{/*{isOnScreen &&
				<Zoom  in={true} timeout={1000}>*/}
      <CardMedia
	        className={classes.img}
	        image={bg}
	        title="TO THE NORTH"
	    />	
			{/*			    </Zoom>
						}*/}
    </Card>	
	</div>
  );
}

export {BoatTrip1};