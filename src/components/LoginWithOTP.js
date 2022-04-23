import React from 'react'
import labels from '../config/labels';
import firebase from '../firebase'
// import {Col,Row,Container} from 'react-bootstrap'
import { useState } from 'react'
import UserOtpValues from './UserOtpValues';
import validate1 from './ValidateOtp'
import LoginContainer from '../container/LoginContainer'
// const LoginWithOTP=(props)=> {
//   // const{ handleChange,values,handleSubmit,errors}=UserOtpValues(validate1);
class LoginWithOTP extends React.Component {
  // const [logOtp,setLoginOtp]=useState(false);
  //   if(logOtp){
  //     return <LoginContainer/>
  //   }

  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca verified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }
  render(){
  return (
    <div className="container white">
     {/* <form className="text-box">
         <h5 className="Left">Login</h5> */}
         {/* <input type="text-box" name="phonenumber" placeholder="Phone Number" id="phonenumber" value={values.phonenumber} onChange={handleChange}/>
         {errors.phonenumber && <p>{errors.phonenumber}</p>} */}
         {/* <input type="text-box" name="phonenumber" placeholder="Phone Number" id="phonenumber" required onChange={this.handleChange}/>
         <p></p>
         <div >
             <button onSubmit={this.onSignInSubmit} className="green darken-4">{labels.LOGINWITHOTP.SEND_OTP}</button>
         </div> */}
         <h5>Login Form</h5>
        <form onSubmit={this.onSignInSubmit}>
           <div id="sign-in-button"></div>
           <input type="text-box" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
           <p></p>
           <div>
           <button className="green darken-4" type="submit">Submit</button>
           </div>
         </form>

            <div>
            <h5>Enter OTP</h5>
            <form onSubmit={this.onSubmitOTP}>
              <input type="text-box" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
              <p></p>
              <div>
              <button type="submit" className="green darken-4">Submit</button>
              </div>
            </form>
            </div>
         <p></p>
         <h6 className="center">{labels.LOGINWITHOTP.DIVIDER_OR}</h6>
         <p></p>
         <div className="center">
         {/* <button onClick={()=>setLoginOtp(true)} className="green darken-4">{labels.LOGINWITHOTP.LOGIN_THROUGH_EMAIL}</button> */}
         <button  className="green darken-4">{labels.LOGINWITHOTP.LOGIN_THROUGH_EMAIL}</button>
     </div>
     {/* </form> */}
    </div>
  )
        }
      }
// const mapStateToProps=(state)=>{
//   return{
//     authStatus:state.auth.authStatus
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     onSignInSubmit:(creds)=> dispatch(onSignInSubmit(creds)),
//     onSubmitOTP:(creds)=>dispatch(onSubmitOTP(creds)),
//   }
// }



// return{handleChange,configureCaptcha,OnSignInSubmit,onSubmitOTP}

export default LoginWithOTP




// import React from 'react'
// import firebase from '../firebase'

// class LoginWithOTP extends React.Component {
//   handleChange = (e) =>{
//     const {name, value } = e.target
//     this.setState({
//         [name]: value
//       })
//   }
//   configureCaptcha = () =>{
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         this.onSignInSubmit();
//         console.log("Recaptca varified")
//       },
//       defaultCountry: "IN"
//     });
//   }
//   onSignInSubmit = (e) => {
//     e.preventDefault()
//     this.configureCaptcha()
//     const phoneNumber = "+91" + this.state.mobile
//     console.log(phoneNumber)
//     const appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
//           console.log("OTP has been sent")
//           // ...
//         }).catch((error) => {
//           // Error; SMS not sent
//           // ...
//           console.log("SMS not sent")
//         });
//   }
//   onSubmitOTP = (e) =>{
//     e.preventDefault()
//     const code = this.state.otp
//     console.log(code)
//     window.confirmationResult.confirm(code).then((result) => {
//       // User signed in successfully.
//       const user = result.user;
//       console.log(JSON.stringify(user))
//       alert("User is verified")
//       // ...
//     }).catch((error) => {
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Login Form</h2>
//         <form onSubmit={this.onSignInSubmit}>
//           <div id="sign-in-button"></div>
//           <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange}/>
//           <button type="submit">Submit</button>
//         </form>

//         <h2>Enter OTP</h2>
//         <form onSubmit={this.onSubmitOTP}>
//           <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }
// export default LoginWithOTP