import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Reveal from 'react-reveal';
import "animate.css/animate.min.css";
import useOnScreen from './useOnScreen';

const useStyles = makeStyles(theme => ({
	root: {
	    backgroundColor: 'transparent',
	    // transform: 'translate(10vw,25%)',
	},
	letter: {
		fontSize: '10em',
		margin: '10px',
		position: 'relative',
		// left: '15vw'
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

function LetterAnimation(props) {
  const classes = useStyles();
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);
  return (
    <div className={classes.root} style={props.position}>	
  		<div ref={ref} className={classes.textcontainer}>
  			{isOnScreen ?
    			<div className={props.strike}> 
					<Reveal duration={props.duration} effect={props.animator} >
					  <div className={classes.letter}>{props.letter}</div>					  					  
					</Reveal>
					<span className="after-strike">{props.phrase}</span>
				</div>
				:
				<div  className={classes.letter}>{props.letter}</div>
			}						
		</div>				
</div>
  );
}

// export {LetterAnimation};

class Letter extends React.Component {
  // constructor(props) {
  //     super(props)
  // }
	render() {
    const { letter, phrase, strike, animator, duration, position } = this.props;
		return (
			<div>
				<LetterAnimation
		          letter = { letter }
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

export {Letter}