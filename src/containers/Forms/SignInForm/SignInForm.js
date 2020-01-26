import React, { Component } from 'react';
import classes from './SignInForm.module.css';
import firebase from '../../../config/fbConfig';

class SignInForm extends Component {

  state = {
    email: '',
    password: ''
  }

  emailHandler = (e) => {
    this.setState({email: e.target.value})
  }

  passwordHandler = (e) => {
    this.setState({password: e.target.value})
  }

  signInHandler = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    });
    this.props.hideModal();
  }

  render(){
    return(
      <div>
        <div className={classes.formWrapper}>
          <div className={classes.firstHalf}>
            <h2 className={classes.SignInFormTitle}>Sign In</h2>
            <p className={classes.description}>With your account you can save your work time.</p>
            <p className={classes.description}>Get yourself one.</p>
            <span className={classes.logo}>LOGO</span>
          </div>
          <div className={classes.secondHalf}>
            <form>
              <label>E-MAIL</label><br/>
              <input onChange={(e)=>this.emailHandler(e)} type="text"/><br/>
              <label>PASSWORD</label><br/>
              <input onChange={(e)=>this.passwordHandler(e)} type="password"/><br/>
              <button onClick={this.signInHandler} className={classes.btnSignIn} type="submit">Log In</button> or
              <a href="#" onClick={this.props.showSignUpModal} className={classes.signUpLink}> Sign Up</a>
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



export default SignInForm;
