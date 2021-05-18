import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Reveal from 'react-reveal';
import "animate.css/animate.min.css";

import Card from '@material-ui/core/Card';

import bg from '../img/s2p1.jpg';

const useStyles = makeStyles(theme => ({
	root: {
	    margin: '0 auto',
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
	letter: {
		fontSize: '10em',
		margin: '10px',
		position: 'relative',
		left: 'calc(-20vw)'
	},
	textcontainer: {
		padding: '20px 25%',
		backgroundColor: 'transparent',
	    backgroundImage: `url(${bg})`,
  		backgroundPosition: '100% 100%',
  		backgroundAttachment: 'scroll',
  		backgroundRepeat: 'no-repeat',
  		backgroundSize: '50%',
  		animation: 'animatedRtL 2s ease-in 1 normal',		
	},
	text: {
		textAlign: 'left',
		fontSize: '1.0em',
	},
	title: {
		textAlign: 'left',
		fontSize: '1.5em',
	},
	card: {
		
	},
	img: {
		margin: '0 0 0 auto',
		width: '400px'
	}
}));

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )
  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])
  return isIntersecting
}

function SectionA() {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref)
  return (
    <div className={classes.root}>
    	<Card className={classes.card}>
	    	<div ref={ref}>
	    		{isOnScreen ?
	    			<div className="strike strike-A"> 
						<Reveal duration={2000} effect="animate__animated animate__bounceInRight">
						  <div className={classes.letter}>A</div>
						</Reveal>
					</div>
					:
					<div  className={classes.letter}>A</div>
				}
			</div>    	
      		<div ref={ref} className={classes.textcontainer}>
      			{isOnScreen &&
	      			<Reveal duration={1000} effect="animate__animated animate__fadeInDown">
						<p className={classes.title}>ADVENTURE</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>
							Beyond the beauty of Naxos that you've probably already experienced, there's a whole new world hidden in the 
							secret corners that only few people can reach. Let us show you the SEA SECRETS of the island, the hidden
							treasures that will create your most unique summer memories.							
						</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>							
							Get on board on our beautiful brand new AXOPAR 28 TT for a day of a half-day tour and discover the most well
							kept secrets of the island.							
						</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>							
							Explore the charming underwater world of the Aegean Sea with our snorkel equipment while riding one of our 4
							electric dive scooters, or find the wind and experience your most epic wing foiling windsurfing, or kite surfing
							sessions on remote spots that every rider dreams about. You can even book your private watersport lesson or rental
							in advance.							
						</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>							
							Included are:<br/>
							Boat with skipper, gasoline, refreshments (water, soft drinks and fruits), the use of snorkel equipment and 4
							dive scooters. Optional sport equipment rental and courses are bookable.
						</p>
					</Reveal>
				}							
			</div>				
      	</Card>	
</div>
  );
}

export {SectionA};