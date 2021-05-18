import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Header} from './Header';
import {SectionA} from './sectionA';
import {SectionB} from './sectionB';


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
			<div className="section-1">
				<Header boxShadow={0} />
			</div>
			<div className="section-2">
				<SectionA />
				<SectionB />				
			</div>
			<div className={classes.random}></div>
			<div className={classes.random}></div>
			<div className={classes.random}></div>
			<div className={classes.random}></div>
		</div>
	)
}

export {Main}