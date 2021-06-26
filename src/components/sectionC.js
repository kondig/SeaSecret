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
					desc = {'Naxos and the surrounding Cycladic islands are known for its fantastic coastlines with hidden caves, ' 
                    + 'beaches and bays. Many of those treasures are not easily ventured to, or are very difficult to access '
                    + 'from land. But we are able to show you these remote places and enjoy the crystal clear water beneath '
                    + 'the surface of the Aegean Sea. With our grab & go scooters enjoy a pull from the propellers '
                    + 'underwater faster than most people swim at full sprint.' }

          descside = {`On calm days it is also possible to visit the shipwreck Marianna, where one can snorkel around the
                       part of the crane which is sticking out of the surface of the sea and through the main body of the
                       sunken ship under water. Half and full day trips available.`}  					
   		  />
     		<MediaCard
					name = { `'SEARCH THE WIND'\nFOR WING FOILERS, WINDSURFERS OR KITE SURFERS` }
					image = { s2c2 }
          desc = { `Have you come to Naxos to make the most out of watersports? Then you should meet your Skipper Jan,
            who came here 27 years ago for this one and only reason, he knows where to find the wind at its best!
            Let him show you the best spots around the Cyclades. You can bring your own equipment or rent it together
            with the boat. For those who are beginners or advanced and want to take some instruction we also offer lessons
            from the boat with the latest intercom communication Helm system from BB talking, which allow you to
            communicate with your instructor whilst being out on the water practicing these epic board sports.` }
          descside = {`Half and full day trips available. With optional equipment rental and instruction.`} 
        />
     		<MediaCard
					name = { `PRIVATE\nCHARTER` }
					image = { s2c3 }
          desc = { `Want an unforgettable day on a boat trip with friends or family? ( up to 8 persons)` }
          descside = {`Let us show you some breathtaking places or just choose your own destination and we will take you
            wherever you want to go within a distance up to a maximum of 60 nautical miles. Ask us for reservations
            and recommendations; almost everything is possible.`} 
        />
     		<MediaCard
    			name = { `PRIVATE\nTRANSFERS` }
    			image = { s2c4 }
          desc = { `A visit to Naoussa on Paros for a nice dinner in the afternoon or evening is one of the options we offer
            when booking a private transfer. We will drive you over to your desired location, and then pick you up any time
            you like. Arrival or departure transfers to Paros, Mykonos or Santorin on request.` }
          descside = {`If you are looking to spend a few days on one of the small Cyclades, we can bring you there individually
           any time and/or pick you up. Ask us for reservations and possibilities.`} 
         		/>
			</div>
		);
	}
}

export {SectionC}