import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner'
import {Header} from './Header';
import {SectionA} from './sectionA';
import {SectionB} from './sectionB';
import {SectionC} from './sectionC';
import {Letter} from './functional/letterTrans';
import {LetterBtn} from './functional/letterBtn';
import {BoatTrip1} from './boatTrip1';
import {BoatTrip2} from './boatTrip2';
import {BoatTrip3} from './boatTrip3';
import {BoatTrip4} from './boatTrip4';
import {AboutUs} from './aboutus';
import {Contact} from './Contact';
import {Gallery} from './Gallery';

import video from '../img/ssdrone-cut.mp4';
// import mainImage from '../img/main.png'

const useStyles = makeStyles(theme => ({
	sections: {
		position: 'relative',
	},
	random: {
		height: '120px',
		[theme.breakpoints.down('sm')]: {
	      height: '0'
	  	},
	  	[theme.breakpoints.down('md')]: {
	      height: '0'
	  	},
	  	[theme.breakpoints.up('lg')]: {
	      height: '200px'
	  	},
	},
	videoTag: { width: '100%', },
	mainImage: { width: '100%' },
	mainArea: {
		position:'relative',
	    height: '100vh',
	    display: 'flex',
	    justifyContent: 'center',
	    [theme.breakpoints.down('md')]: {
	      height: '70vh',
	      overflow: 'hidden',
	  	},
	},
	mainLoader: {
		alignSelf: 'center',
	},
	ltrA: {
		transform:'translate(0%,-10%)'
	}
}));

const Main = () => {
	const classes = useStyles();
	const [count, setCount] = useState(0);
	useEffect(() => {
    const timer = setTimeout(() => { setCount('Timeout called!'); }, 6000);
	    return () => clearTimeout(timer);
	}, []);
	return (
		<div className={classes.sections}> 
			<div className="section-head">
				<Header boxShadow={0} />
				
				{/*<img src={mainImage} alt="Sea Secret" className={classes.mainImage}/>*/}
				{ count < 6000 ?					
					<div className={classes.mainArea} > 
			          <Loader
			            type="ThreeDots"
			            color="#1bdcd1"
			            height={100}
			            width={100}
			            timeout={6000}
			            className={classes.mainLoader}
			          />
			        </div>
					:
					<div>
						<LetterBtn phrase={`live your\nADVENTURE\n with us`} strike={'strike strike-m'} duration={2000}
						position={{transform:'translate(10vw,25%)'}} 						
						animator={`animate__animated animate__fadeIn phrase`} />
						<video className={classes.videoTag} autoPlay loop muted>
					    	<source src={video} type='video/mp4' />
						</video>
					</div>					
				}		
				
	
			</div>
			<div className="section-1-intro">
				<Letter letter={`A`} strike={'strike strike-A'} duration={2000} 
						position={{transform:'translate(-30%, -30%)'}}
						animator={`animate__animated animate__fadeIn`}  />
				{/*<div className={classes.random}></div>*/}				
				<SectionA />
				<SectionB />
				<div id="tours"></div>
				<SectionC />				
			</div>
			<div className="section-2-head" id="bt">
				<Letter letter={`C`} strike={'strike strike-C'} phrase={`CYCLADES`} duration={3000} 
						position={{transform:'translate(10vw,42%)'}}
						animator={`animate__animated animate__fadeIn`}  />
			</div>
			<div className="section-2-body" >
				<h3>BOAT TRIPS</h3>
				<BoatTrip1 />
				<BoatTrip2 />
				<BoatTrip3 />
				<BoatTrip4 />
			</div>
			<div className="section-3-head">
				<Letter letter={`A`} strike={'strike strike-A3'} duration={500}
						position={{transform:'translate(20vw,60%)'}}
						animator={`animate__animated animate__fadeIn`} />
			</div>
			<div className="section-3-body" id="about">
				<AboutUs />
				<div id="contact"></div>
				<Contact />
				<div id="gallery"></div>
				<Gallery />
			</div>
		</div>
	)
}

export {Main}