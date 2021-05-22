import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Reveal from 'react-reveal';
import "animate.css/animate.min.css";

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

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )
  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])
  return isIntersecting
}


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
  constructor(props) {
      super(props)
  }
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