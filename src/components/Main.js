import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Header} from './Header';
import {Section} from './section';


const useStyles = makeStyles(theme => ({
	random: {
		height: '200px',
	}
}));

const Main = () => {
	const classes = useStyles();
	return (
		<div> 
			<div className="section-a">
				<Header boxShadow={0} />
			</div>
			<div className="section-b">
				<Section />				
			</div>
			<div className={classes.random}></div>
			<div className={classes.random}></div>
			<div className={classes.random}></div>
			<div className={classes.random}></div>
		</div>
	)
}

export {Main}