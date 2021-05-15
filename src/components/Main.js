import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Header} from './Header';
import {Section} from './section';


const useStyles = makeStyles(theme => ({
	random: {
		height: '500px',
	}
}));

const Main = () => {
	const classes = useStyles();
	return (
		<div> 
			<div className="section-a">
				<Header boxShadow={0} />
			</div>
			<div className={classes.random}></div>
			<div className="section-b">
				<Section />				
			</div>
		</div>
	)
}

export {Main}