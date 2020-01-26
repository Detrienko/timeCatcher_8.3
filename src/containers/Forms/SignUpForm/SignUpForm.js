import React, { Component } from 'react';
import classes from './SignUpForm.module.css';

import firebase from '../../../config/fbConfig';

class SignUpForm extends Component {

  state = {
    email: '',
    password: '',
    repeatPassword: '',
  }

  signUpHandler = () => {

    if(this.state.password!==this.state.repeatPassword){
      alert('Passwords do not match');
      return false;
    }
    
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
    this.props.hideModal();
  }

  emailHandler = (e) => {
    this.setState({email: e.target.value})
  }

  passwordHandler = (e, whichPassword) => {
    if(whichPassword=='first'){
      this.setState({password: e.target.value})
    }
    else if(whichPassword=='second'){
      this.setState({repeatPassword: e.target.value})
    }
  }

  render(){
    return(
      <div>
        <div className={classes.formWrapper}>
          <div className={classes.firstHalf}>
            <h2 className={classes.SignUpFormTitle}>Sign Up</h2>
            <p className={classes.description}>With your account you can save your work time.</p>
            <p className={classes.description}>Get yourself one.</p>
            <span className={classes.logo}>LOGO</span>
          </div>
          <div className={classes.secondHalf}>
            <form>
              <label>E-MAIL</label><br/>
              <input onChange={(e)=>this.emailHandler(e)} type="text"/><br/>
              <label>PASSWORD</label><br/>
              <input onChange={(e)=>this.passwordHandler(e, 'first')} type="password"/><br/>
              <label>REPEAT PASSWORD</label><br/>
              <input onChange={(e)=>this.passwordHandler(e, 'second')} type="password"/><br/><br/>
              <button onClick={this.signUpHandler} className={classes.btnSignUp} type="submit">Sign Up</button> or
              <a href="#" onClick={this.props.showSignInModal} className={classes.logInLink}> Log In</a>
            </form>
          </div>
        </div>
        <div 
          id='formCover'
          className={classes.formCover}
          onClick={this.props.hideModal}>
        </div>
      </div>
      )
  }

}



export default SignUpForm;
