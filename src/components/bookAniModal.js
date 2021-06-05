import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
// import axios from 'axios';

import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  heading: {
    textAlign: 'center',
    backgroundColor: '#000000',
      color: '#ffffff',
    margin: '0',
    padding: '10px',
  },
  formControl: {
    width: '100%',
    borderRadius: '3px',
    border: '1px solid #c4c4c4',
    boxShadow: '1px 1px #c4c4c4',
  },
  formGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '10px 0px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  msg: { textAlign: 'center',}
}));



function BookAniModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [status, setStatus] = React.useState('');
  const [btntext, setBtntext] = React.useState('Submit');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit= (e) => {
      e.preventDefault();
      // console.log(name,email,message);
      setBtntext('Sending...');
      emailjs.send('service_q5rphf9','SSbt-4cqaecd', templateParams, 'user_G3PrDBibDDPOlb11ZGcMO')
      .then((response) => {
        showMsg();
        setBtntext('Sent'); 
        setTimeout(() => { resetForm(); }, 6000)
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        setBtntext('Failed to send');
         console.log('FAILED...', err);
      });
    }

  const templateParams = {
      name: name,
      message: message,
      email: email
  };
 


  const resetForm = () => { setName(''); setEmail(''); setMessage(''); setBtntext('Submit'); setStatus('');}
  const showMsg = () => { setStatus('Thank you for contacting us!')}

  return (
    <div>
      <Button type="button" size="large" onClick={handleOpen} className="after-strike btn-strike">
        book now
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.heading}>book now</h2>           
            <form id="contact-form" method="POST" onSubmit={e => {handleSubmit(e)}}>
              <div className={classes.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" className={classes.formControl} 
                         onChange={e => setName(e.target.value)}
                         value={name} />
              </div>
              <div className={classes.formGroup}>
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className={classes.formControl} aria-describedby="emailHelp" 
                         onChange={e => setEmail(e.target.value)}
                         value={email} />
              </div>
              <div className={classes.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea className={classes.formControl} rows="5"
                            onChange={e => setMessage(e.target.value)}
                            value={message}></textarea>
              </div>
              <div className={classes.btnContainer}>
                <Button type="submit" size='large' className={classes.btn}>{btntext}</Button>
              </div>             
            </form>
            <p id="transition-modal-description" className={classes.msg}>{status}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export {BookAniModal}