import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Reveal from 'react-reveal';
import "animate.css/animate.min.css";

const useStyles = makeStyles(theme => ({
	root: {
	    backgroundColor: 'transparent',
	    // transform: 'translate(10vw,25%)',
	    position: 'absolute',
	    top: '50%',
	},
	phrase: {
		fontSize: '2em',
		margin: '10px',
		position: 'relative',
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
				<Button size="large" className="after-strike btn-strike">book now</Button>
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
