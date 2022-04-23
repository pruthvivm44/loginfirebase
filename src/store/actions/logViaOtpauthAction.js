// export const onSignInSubmit =(credentials)=>{
//     return(dispatch)=>{
//     e.preventDefault()
//     this.configureCaptcha()
//     const phoneNumber = "+91" + credentials.this.state.mobile
//     console.log(phoneNumber)
//     const appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//             localStorage.setItem('loginOtp',credentials.this.state.mobile)
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
//           console.log("OTP has been sent")
//           dispatch({type:'OTP_HAS_BEEN_SENT',data:confirmationResult})
//           // ...
//         }).catch((error) => {
//           // Error; SMS not sent
//           // ...
//           dispatch({type:'SMS_NOT_SENT',error})
//           console.log("SMS not sent")
//         });
// }}
// export const onSubmitOTP=(otp)=>{
//     return(dispatch)=>{
//         e.preventDefault()
//         const code = this.state.otp
//         console.log(code)
//         window.confirmationResult.confirm(code).then((result) => {
//           // User signed in successfully.
//           const user = result.user;
//           dispatch({type:'SIGNIN_SUCCESSFULL',user});
//           console.log(JSON.stringify(user))
//           alert("User is verified")
//           // ...
//         }).catch((error) => {
//           // User couldn't sign in (bad verification code?)
//           // ...
//           dispatch({type:'OTP_INCORRECT',error});
//         });
//     }
// } 