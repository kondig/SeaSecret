import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {BookModal} from './bookModal';

//images
import s2c1 from '../img/s2c1.jpg';
import s2c2 from '../img/s2c2.jpeg';
import s2c3 from '../img/s2c3.jpg';
import s2c4 from '../img/s2c4.jpg';

const useStyles = makeStyles( theme => ({
  root: {
    maxWidth: 340,
    margin: '20px 5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 0 0 0',
    [theme.breakpoints.up('sm')]: {
      flex: '0 0 50%',
      maxWidth: 300,
    },   
    [theme.breakpoints.up('md')]: {
      flex: '0 0 50%',
      maxWidth: 440,
    },
    [theme.breakpoints.up('lg')]: {
      flex: '0 0 25%',
      maxWidth: 290,
    },
    [theme.breakpoints.up('xl')]: {
      flex: '0 0 25%',
      maxWidth: 370,
    },
  },
  btn: {
  	backgroundColor: '#000000',
  	color: '#ffffff',
    textTransform: 'lowercase',
    '&:hover': {
      backgroundColor: '#1bdcd1',
      color: '#000000',
    }
  },
  cardbtnarea: {
  	display: 'flex',
  	justifyContent: 'flex-end',
    margin: 'auto 0px 0px 0px',
  },
  imagearea: {
    height: '350px',
    cursor: 'default',
    [theme.breakpoints.down('sm')]: {
      height: '250px',
    },
  },
  text: {
    textAlign: 'left',
    fontSize: '0.8em',
  }
}));

function BreakLine(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.imagearea}>
        <CardMedia
          component="img"
          height="100%"    
          alt={props.name}
          title={props.name}
          image={props.image}
          className="suiteImage"
        />        
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <BreakLine text={props.name} />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text} >
            {props.desc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text} >
            {props.descside}
          </Typography>          
      </CardContent>    
      <CardActions className={classes.cardbtnarea}>
        <BookModal />
      </CardActions>
      <Divider />
    </Card>
  );
}

class SectionC extends React.Component {
  // constructor(props) {
  //     super(props)
  //     this.myRef = createRef()  
  // }
	render() {
    // const { name, desc, image } = this.props;
		return (
			<div className="card-container">
				<MediaCard
					name = { `SNORKEL TRIPS\nWITH DIVE SCOOTERS` }
          image = { s2c1 }
					desc = { 'Naxos and the surrounding cycladian islands are known for its fantastic coastline with hidden beaches and caves. '
                    + 'Many of those treasures are not or very difficult to access from land, we will show you some beautiful places and let ' 
                    + 'you dive in the underwater world of the Cyclades. There are some nice reefs and coves and caves which we have '
                    + 'found for you to be explored together with us. Ride one of the dive scooters on board and enjoy the crystal clear '
                    + 'waters of the Aegean sea. On calm days it’s also possible to go to a shipwreck for snorkeling.' }
          descside = {`Possible half and full day trips.`}  					
   		  />
     		<MediaCard
					name = { `SEARCH\nTHE WIND` }
					image = { s2c2 }
          desc = { 'You are here on Naxos for one of those fantastic water sports? Your Skipper Jan came here 27 years ago for this '
                    + 'reason; he knows where the wind blows. Let him show you the best spots around the Cyclades. You can bring '
                    + 'your own equipment or rent it also together with the boat. For those which are beginners or advanced and '
                    + 'want to take some instruction we offer this as well from the boat and use the latest intercom communication '
                    + 'Helm system from BB talking, so you can talk all the time with your instructor.' }
          descside = {`Possible half and full day trips. With optional equipment rental and instruction.`} 
        />
     		<MediaCard
					name = { `PRIVATE CHARTER` }
					image = { s2c3 }
          desc = { 'You want to spend an unforgettable day on a boat trip with friends or family up to 8 Persons? We can show you some breath taking '
                    + 'places or you just choose your own destination and we bring you wherever you want to go in a distance of maximum 60 nautical miles per day.' }
          descside = {`Ask us for reservations and recommendations, almost everything is possible.`} 
        />
     		<MediaCard
    			name = { `PRIVATE TRANSFERS` }
    			image = { s2c4 }
          desc = { 'Want to visit Naoussa on Paros for a nice dinner in the afternoon or evening? We can bring you over and pick '
                    + 'you up again any time you like. Arrival or departure transfers to Paros, Mykonos or Santorini on request.'
                    + 'Looking to spend a few days on one of the small Cyclades, we can bring you there individually any time and pick you up again.' }
          descside = {`Ask us for reservations.`} 
         		/>
			</div>
		);
	}
}

export {SectionC}