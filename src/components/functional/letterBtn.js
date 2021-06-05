import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Reveal from 'react-reveal';
import "animate.css/animate.min.css";
import {BookAniModal} from '../bookAniModal';

const useStyles = makeStyles(theme => ({
	root: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '50%',
    [theme.breakpoints.down('sm')]: {
	    top: '53%',
	    left: '-17%'
	  },
    [theme.breakpoints.up('sm')]: {
	    top: '63%',
	    left: '0',
	  },
	  [theme.breakpoints.up('md')]: {
	    top: '63%',
	    left: '0',
	  },
	},
	phrase: {
		fontSize: '2em',
		margin: '10px',
		position: 'relative',
		textAlign: 'right',
		[theme.breakpoints.up('md')]: {
	      fontSize: '1em',
	  },
	},
	textcontainer: {
		margin: '20px 15px',
		width: '100%',
	},
	text: {
		textAlign: 'left',
		fontSize: '1.0em',
	},
}));

function BreakLine(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

function LetterAnimation(props) {
  const classes = useStyles();
  // const ref = useRef();
  return (
    <div className={classes.root} style={props.position}>
  		<div className={classes.textcontainer}>
				<div className={props.strike}>
					<Reveal duration={props.duration} effect={props.animator} >
					  	<BreakLine text={props.phrase} className={classes.phrase} />
					</Reveal>
					<BookAniModal />
				</div>
			</div>
		</div>
  );
}

// export {LetterAnimation};

class LetterBtn extends React.Component {
  // constructor(props) {
  //     super(props)
  // }
	render() {
    const { phrase, strike, animator, duration, position } = this.props;
		return (
			<div>
				<LetterAnimation
		          phrase = { phrase }
		          strike = { strike }
		          animator = { animator }
		          duration = { duration }
		          position = { position }
         		/>
			</div>
		);
	}
}

export {LetterBtn}
