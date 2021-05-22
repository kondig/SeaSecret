import React, { createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

//images
import s2c1 from '../img/s2c1.jpg';
import s2c2 from '../img/s2c2.jpeg';
import s2c4 from '../img/s2c4.jpg';

const useStyles = makeStyles( theme => ({
  root: {
    maxWidth: 345,
    margin: '20px 5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btn: {
  	backgroundColor: '#000000',
  	color: '#ffffff',
    textTransform: 'lowercase',
    '&:hover': {
      backgroundColor: '#1bdcd1',
      color: '#000000',
    }
  },
  cardbtnarea: {
  	display: 'flex',
  	justifyContent: 'flex-end',
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
    fontSize: '0.8em',
  }
}));

function BreakLine(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.imagearea}>
        <CardMedia
          component="img"
          height="100%"    
          alt={props.name}
          title={props.name}
          image={props.image}
          className="suiteImage"
        />        
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <BreakLine text={props.name} />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text} >
            {props.desc}
          </Typography>          
      </CardContent>
      <Divider />
      <CardActions className={classes.cardbtnarea}>
        <Button size="medium" className={classes.btn} >
          book now
        </Button>
      </CardActions>
    </Card>
  );
}

class SectionC extends React.Component {
  constructor(props) {
      super(props)
      // this.myRef = createRef()  
  }
	render() {
    // const { name, desc, image } = this.props;
		return (
			<div className="card-container">
				<MediaCard
					name = { `SNORKEL TRIPS\nWITH DIVE SCOOTERS` }
          image = { s2c1 }
					desc = { 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit augue sed ex pellentesque tincidunt.' 
                    + ' Phasellus eu lectus a est lobortis feugiat. Ut eget congue nisi. Duis malesuada tempus est. In sed interdum elit, non placerat arcu.'
                    + ' Vestibulum et tellus risus. Maecenas eleifend elementum mauris. Etiam malesuada scelerisque laoreet. Aenean vitae volutpat urna, nec'
                    + ' gravida nulla. Nulla ornare feugiat porttitor. Nullam finibus ex quam, non tempor massa pellentesque et. Aliquam auctor lorem non'
                    + ' neque eleifend suscipit. Maecenas luctus venenatis est eleifend porttitor. Morbi facilisis scelerisque lorem, nec bibendum turpis'
                    + ' cursus id. Mauris pulvinar posuere velit, quis elementum justo.' }  					
   		  />
     		<MediaCard
					name = { `SEARCH THE WIND` }
					image = { s2c2 }
          desc = { 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit augue sed ex pellentesque tincidunt.' 
                    + 'Phasellus eu lectus a est lobortis feugiat. Ut eget congue nisi. Duis malesuada tempus est. In sed interdum elit, non placerat arcu.'
                    + 'Vestibulum et tellus risus. Maecenas eleifend elementum mauris. Etiam malesuada scelerisque laoreet. Aenean vitae volutpat urna, nec'
                    + 'gravida nulla. Nulla ornare feugiat porttitor. Nullam finibus ex quam, non tempor massa pellentesque et. Aliquam auctor lorem non'
                    + 'neque eleifend suscipit. Maecenas luctus venenatis est eleifend porttitor. Morbi facilisis scelerisque lorem, nec bibendum turpis'
                    + 'cursus id. Mauris pulvinar posuere velit, quis elementum justo.' }
        />
     		<MediaCard
					name = { `PRIVATE CHARTER` }
					image = { s2c1 }
          desc = { 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit augue sed ex pellentesque tincidunt.' 
                    + 'Phasellus eu lectus a est lobortis feugiat. Ut eget congue nisi. Duis malesuada tempus est. In sed interdum elit, non placerat arcu.'
                    + 'Vestibulum et tellus risus. Maecenas eleifend elementum mauris. Etiam malesuada scelerisque laoreet. Aenean vitae volutpat urna, nec'
                    + 'gravida nulla. Nulla ornare feugiat porttitor. Nullam finibus ex quam, non tempor massa pellentesque et. Aliquam auctor lorem non'
                    + 'neque eleifend suscipit. Maecenas luctus venenatis est eleifend porttitor. Morbi facilisis scelerisque lorem, nec bibendum turpis'
                    + 'cursus id. Mauris pulvinar posuere velit, quis elementum justo.' }
        />
     		<MediaCard
    			name = { `PRIVATE TRANSFERS` }
    			image = { s2c4 }
          desc = { 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit augue sed ex pellentesque tincidunt.' 
                    + 'Phasellus eu lectus a est lobortis feugiat. Ut eget congue nisi. Duis malesuada tempus est. In sed interdum elit, non placerat arcu.'
                    + 'Vestibulum et tellus risus. Maecenas eleifend elementum mauris. Etiam malesuada scelerisque laoreet. Aenean vitae volutpat urna, nec'
                    + 'gravida nulla. Nulla ornare feugiat porttitor. Nullam finibus ex quam, non tempor massa pellentesque et. Aliquam auctor lorem non'
                    + 'neque eleifend suscipit. Maecenas luctus venenatis est eleifend porttitor. Morbi facilisis scelerisque lorem, nec bibendum turpis'
                    + 'cursus id. Mauris pulvinar posuere velit, quis elementum justo.' }
         		/>
			</div>
		);
	}
}

export {SectionC}