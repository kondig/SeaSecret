import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import "animate.css/animate.min.css";
import bg from '../img/s2p1.jpg';

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
	  [theme.breakpoints.down('md')]: {
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
		width: '50%',
		height: 400,
		// verticalAlign: 'text-bottom',
		verticalAlign: 'top',
		[theme.breakpoints.down('sm')]: {
	      width: '100%',
	      height: 200,
	      backgroundSize: 'contain',
	  },
	  [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 400,
      backgroundSize: 'cover',
    },
	}, 
}));

function SectionA() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    	<Card className={classes.card}>	    	    	
    		<div className={classes.textcontainer}>
					<p className={classes.title}>ADVENTURE</p>
					<p className={classes.text}>
						Beyond the beauty of Naxos that you might have already experienced, there&#39;s a whole world of ocean blues and
						hidden corners that only few people can reach. Let us show you these SEASECRETS, the hidden treasures of Naxos and
						the islands around it that will create your most unique summer memories.							
					</p>
					<p className={classes.text}>							
						Step aboard on our beautiful new AXOPAR 28 TT for one of our day or half-day tours and discover the most well kept
						secrets of the Cycladic islands.							
					</p>
					<p className={classes.text}>							
						Explore the charming underwater world of the Aegean Sea with our snorkel equipment, riding one of our 5 dive
						scooters, or catch the wind and experience your most epic wing foiling, windsurfing, or kite surfing sessions on
						remote spots that every rider dreams about. You can also book private watersport lesson or rent our equipment in
						advance.
						<br/><br/>						
					</p>
					<p className={classes.text}>							
						Included are:<br/>
						Our knowledgeable, good vibes and experienced skipper Jan (English, German &amp; Greek speaking).<br/>
						Refreshments incl. water, soft drinks, occasional beers and fresh local fruits.<br/>
						A guide to the best cliff diving, snorkeling and swimming spots.<br/>
						The use of snorkel equipment and 5 dive scooters to wiz through the crystal clear turquoise water.<br/>
						Optional : renting of sport equipment and courses.
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