import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Reveal from 'react-reveal';

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
	    backgroundColor:'#transparent'
	},
	letter: {
		fontSize: '10em',
		margin: '10px',
		position: 'relative',
		left: 'calc(-20vw)'
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

function Section() {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref)
  return (
    <div className={classes.root}>
    	<Card className={classes.card}>
	    	<div ref={ref}>
	    		{isOnScreen ?
	    			<div className="strike"> 
						<Reveal duration={1000} effect="animate__animated animate__bounceInRight">
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
					<Reveal duration={1000} effect="animate__animated animate__fadeInDown">
						<p className={classes.text}>
							Beyond the beauty of Naxos that you've probably already experienced, there's a whole new world hidden in the 
							secret corners that only few people can reach. Let us show you the SEA SECRETS of the island, the hidden
							treasures that will create your most unique summer memories.
						</p>
					</Reveal>
				}
			</div>
      	</Card>	
    </div>
  );
}

export {Section};