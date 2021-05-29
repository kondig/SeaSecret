import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import "animate.css/animate.min.css";
import bg from '../img/s2p1.png';

const useStyles = makeStyles(theme => ({
	root: {
    margin: '0 auto',
    display: 'flex',   
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    borderRadius: '0',
    border: '0',
    backgroundColor: '#ffffff',	    
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
	textcontainer: {
		padding: '20px 15px',
		width: '50%',
		backgroundColor: 'transparent',
  //   backgroundImage: `url(${bg})`,
		// backgroundPosition: '100% 100%',
		// backgroundAttachment: 'scroll',
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: '50%',
		// animation: 'animatedRtL 2s ease-in 1 normal',
		position: 'absolute',
		left: '25%',
		transform: 'translateY(-25%)',
		[theme.breakpoints.down('sm')]: {
	    width: '100%',
	    position: 'relative',
			left: '0%',
			transform: 'translateY(0%)',
			padding: '20px 15px 0px 15px',
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
	card: {
		position: 'relative',
		overflow: 'visible',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexWrap: 'wrap',
		boxShadow: '0 0 0 0',
		borderRadius: '0',
		[theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
	  },
	},
	img: {
		margin: '0 0 0 0',
		width: '50vw',
		height: 400,
		verticalAlign: 'text-bottom',
		[theme.breakpoints.down('sm')]: {
	      width: '100%',
	      height: 200,
	      backgroundSize: 'contain',
	  },
	}
}));

function SectionA() {
  const classes = useStyles();
  const ref = useRef();
  return (
    <div className={classes.root}>
    	<Card className={classes.card}>	    	    	
    		<div className={classes.textcontainer}>
					<p className={classes.title}>ADVENTURE</p>
					<p className={classes.text}>
						Beyond the beauty of Naxos that you've probably already experienced, there's a whole new world hidden in the 
						secret corners that only few people can reach. Let us show you the SEA SECRETS of the island, the hidden
						treasures that will create your most unique summer memories.							
					</p>
					<p className={classes.text}>							
						Get on board on our beautiful brand new AXOPAR 28 TT for a day of a half-day tour and discover the most well
						kept secrets of the island.							
					</p>
					<p className={classes.text}>							
						Explore the charming underwater world of the Aegean Sea with our snorkel equipment while riding one of our 4
						electric dive scooters, or find the wind and experience your most epic wing foiling windsurfing, or kite surfing
						sessions on remote spots that every rider dreams about. You can even book your private watersport lesson or rental
						in advance.
						<br/><br/>						
					</p>
					<p className={classes.text}>							
						Included are:<br/>
						Boat with skipper,<br/> gasoline,<br/> refreshments (water, soft drinks and fruits),<br/> the use of snorkel equipment and 4
						dive scooters.<br/>
						<br/>Optional sport equipment rental and courses are bookable.
						<br/><br/>
					</p>				
				</div>
				{/*<img src={bg} alt="" className={classes.img}/>*/}
				<CardMedia
	        className={classes.img}
	        image={bg}
	        title=""
	    	/>			
		  </Card>	
		</div>
  );
}

export {SectionA};