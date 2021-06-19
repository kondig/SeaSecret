import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Reveal from 'react-reveal';
import "animate.css/animate.min.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import useOnScreen from './functional/useOnScreen';
//image
import ssBoat from '../img/ss-boat.jpg';

const useStyles = makeStyles( theme => ({
  root: {
    maxWidth: 800,
    width: '100%',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '0 0 0 0',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    }
  },
  imagearea: {
    height: '350px',
    cursor: 'default',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
  },
  text: {
    textAlign: 'left',
    fontSize: '1.0em',
  },
  textcontainer: {
    // padding: '20px 25%',
    width: '100%',   
  },
  title: {
    textAlign: 'left',
    fontSize: '1.5em',
  },
  btn: {
    backgroundColor: '#000000',
    color: '#ffffff',
    textTransform: 'lowercase',
    '&:hover': {
      backgroundColor: '#1bdcd1',
      color: '#000000',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      height: '2px',
      width: '100%',
      background: 'rgba(0, 0, 0, 0.87)',
      animationDuration: '3s',
      animationTimingFunction: 'ease-in',
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: 'strikeMore',
      top: '-40%', 
      left: '-150%',  
    }
  },
  cardbtnarea: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '30px',
  }
}));

// function BreakLine(props) {
//   const text = props.text;
//   return text.split('\n').map(str => <p>{str}</p>);
// }

function AboutUs(props) {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref)
  return (
    <Card className={classes.root}>      
      <CardContent>
        <div ref={ref} className={classes.textcontainer}>
            {isOnScreen &&
              <Reveal duration={1000} effect="animate__animated animate__fadeInDown">
                <p className={classes.title}>ABOUT US</p>
              </Reveal>
            }
            {isOnScreen &&
              <Reveal duration={400} effect="animate__animated animate__fadeInDown">
                <p className={classes.text}>
                  For the last 27 years we have been dedicating ourselves to our passion &amp; love for watersports, and
                  facilitating that for others to experience too at our base, the Flisvos Sportclub. Welcoming people from
                  all around the world into what we have built at our water sports centers, accommodation, shops and our
                  fantastic restaurant, with all our heart. With those last 27 years, we have fallen in love repeatedly
                  with this islands and what it has to offer, discovering something new every time. This happiness is so
                  great that it’s only fair for us to share it.
                </p>
              </Reveal>
            }
            {isOnScreen &&
              <Reveal duration={400} effect="animate__animated animate__fadeInDown">
                <p className={classes.text}>
                  Let us show you the secrets that make us feel so connected to this blessed place. And if you are a water sports lover,
                  you’ll love a trip with us even more: a high speed boat, equipped with the latest sport gear, bringing you to a
                  private windy spot for a session to remember, clear waters, summer breeze, refreshments and a dedicated skipper,
                   what’s not to love?
                </p>
              </Reveal>
            }
            {isOnScreen &&
              <Reveal duration={400} effect="animate__animated animate__fadeInDown">
                <p className={classes.text}>
                  Isn't life great?
                </p>
              </Reveal>
            }
        </div>         
      </CardContent>
      <Divider />
      <CardActionArea className={classes.imagearea}>
        <CardMedia
          component="img"
          height="100%"  
          alt='Sea Secret'
          image={ssBoat}
          className="sea-secret-boat"
        />        
      </CardActionArea>
      <CardActions className={classes.cardbtnarea}>
        <Button size="large" className={classes.btn} href="https://www.axopar.fi/range/axopar-28-t-top/" >
          more
        </Button>
      </CardActions>
      <CardContent>
        <div className={classes.textcontainer}>
            <Reveal duration={1000} effect="animate__animated animate__fadeInDown">
              <p className={classes.title}>OUR BOAT: <b>AXOPAR 28 TT</b></p>
            </Reveal>
            <Reveal duration={400} effect="animate__animated animate__fadeInDown">
              <table className={classes.text}>
                <tr>
                  <td>CAPACITY</td>
                  <td>8 persons plus skipper</td>
                </tr>
                <tr>
                  <td>LENGTH</td>
                  <td>9.18 vm</td>
                </tr>
                <tr>
                  <td>MAX SPEED</td>
                  <td>40 kts</td>
                </tr>
                <tr>
                  <td>ENGINES</td>
                  <td>300 hp</td>
                </tr>
                <tr>
                  <td>FUEL CAPACITY</td>
                  <td>280 l</td>
                </tr>
              </table>
            </Reveal>
        </div>         
      </CardContent>
    </Card>
  );
}


export {AboutUs}