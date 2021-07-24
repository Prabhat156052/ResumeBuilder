import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from '../firebase';

export default class Otplogin extends Component {

  
    handleChange = e =>{
        const{name, value} = e.target
        this.setState({
            [name]:value
        })
    }
    configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              this.onSignInSubmit();
              console.log("Recapcha verified");
            },
            defaultCountry:"IN"
          });
    }
    onSignInSubmit = (e) => {
        e.preventDefault();
        this.configureCaptcha()

        const phoneNumber = "+91" + this.state.mobile
        console.log(phoneNumber);
       

         const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
         // ...
       console.log("OTP has been sent")
       }).catch((error) => {
         // Error; SMS not sent
         // ...
        console.log("SMS not sent")
        });
      }

      onSubmitOtp = (e) => {
        e.preventDefault();
        const code = this.state.otp
        console.log(code);
         window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user))
          alert('User is verified')
          if(user){
            this.props.history.push("/resume");
          }
         
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
      }
    render() {
        return (
            <div className='otplogin'>
                <h3>Login here</h3>
                <form onSubmit={this.onSignInSubmit}>
                <div id="sign-in-button"></div>
                       <input type="number" name="mobile" id="mobile" required placeholder="+917000000000" onChange={this.handleChange} />
                       <button className="button" type="submit">Submit</button>
                </form>
                <form onSubmit={this.onSubmitOtp}>
                    <input type="number" name="otp" id="otp" required placeholder="OTP" onChange={this.handleChange} />
                    <button className="button" type="submit">Verify</button>

               </form>
            </div>
        )
    }
}
