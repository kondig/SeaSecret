import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Reveal from 'react-reveal';
import "animate.css/animate.min.css";

import Card from '@material-ui/core/Card';

import bg from '../img/s2p2.jpg';

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
	    backgroundColor:'#transparent'
	},
	letter: {
		fontSize: '10em',
		margin: '10px',
		position: 'relative',
		left: 'calc(-20vw)'
	},
	textcontainer: {
		margin: '20px 15px',
		width: '45%',				
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
		display: 'flex',
		justifyContent: 'flex-end',
		backgroundImage: `url(${bg})`,
  		backgroundPosition: '0% 0%',
  		backgroundAttachment: 'scroll',
  		backgroundRepeat: 'no-repeat',
  		backgroundSize: '50%',
  		animation: 'animatedLtR 2s ease-in 1 normal',
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

function SectionB() {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref)
  return (
    <div className={classes.root}>
    	<Card className={classes.card}> 	
      		<div ref={ref} className={classes.textcontainer}>
      			{isOnScreen ?
	    			<div className="strike strike-E"> 
						<Reveal duration={2000} effect="animate__animated animate__bounceInRight">
						  <div className={classes.letter}>E</div>
						</Reveal>
					</div>
					:
					<div  className={classes.letter}>E</div>
				}
      			{isOnScreen &&
	      			<Reveal duration={1000} effect="animate__animated animate__fadeInDown">
						<p className={classes.title}>EXPLORE</p>
					</Reveal>
				}
				{isOnScreen &&
					<Reveal duration={400} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>
							From relaxing boat trips with snorkeling and relaxation to adventurous water sports
							getaways and from selected island discoveries to private charters and transfers,
							choose the trip that better suits your needs and create unforgettable memories for
							you and your close ones.
						</p>
					</Reveal>
				}							
			</div>				
      	</Card>	
</div>
  );
}

export {SectionB};