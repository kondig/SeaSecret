import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Header} from './Header';
import {SectionA} from './sectionA';
import {SectionB} from './sectionB';
import {SectionC} from './sectionC';
import {Letter} from './functional/letterTrans';
import {BoatTrip1} from './boatTrip1';
import {BoatTrip2} from './boatTrip2';
import {BoatTrip3} from './boatTrip3';
import {BoatTrip4} from './boatTrip4';

const useStyles = makeStyles(theme => ({
	sections: {
		position: 'relative',
	},
	random: {
		height: '200px',
	}
}));

const Main = () => {
	const classes = useStyles();
	return (
		<div className={classes.sections}> 
			<div className="section-head">
				<Header boxShadow={0} />
			</div>
			<div className="section-1-intro">
				<SectionA />
				<SectionB />
				<SectionC />				
			</div>
			<div className="section-2-head">
				<Letter letter={`C`} strike={'strike strike-C'} phrase={`CYCLADES`} duration={2000} 
						position={{transform:'translate(10vw,25%)'}}
						animator={`animate__animated animate__bounceInRight`}  />
			</div>
			<div className="section-2-body">
				<h3>BOAT TRIPS</h3>
				<BoatTrip1 />
				<BoatTrip2 />
				<BoatTrip3 />
				<BoatTrip4 />
			</div>
			<div className="section-3-head">
				<Letter letter={`A`} strike={'strike strike-A3'} duration={500}
						position={{transform:'translate(25vw,60%)'}}
						animator={`animate__animated animate__bounceInLeft`} />
			</div>
		</div>
	)
}

export {Main}