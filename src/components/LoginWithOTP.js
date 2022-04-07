import React from 'react'
import labels from '../config/labels';
import { useState } from 'react'
import UseForm1 from './UseForm1';
import validate1 from '../validations/ValidateOtp'
import LoginWithEmail from './LoginWithEmail';

const LoginWithOTP=()=> {
    const{ handleChange,values,handleSubmit,errors}=UseForm1(validate1);

    const [logOtp,setLoginOtp]=useState(false);
    if(logOtp){
      return <LoginWithEmail/>
    }
    
  return (
    <div className="container white">
     <form className="text-box" onSubmit={handleSubmit}>
         <h5 className="Left">Login</h5>
         <input type="text-box" name="phonenumber" placeholder="Phone Number" id="phonenumber" value={values.phonenumber} onChange={handleChange}/>
         {errors.phonenumber && <p>{errors.phonenumber}</p>}
         <p></p>
         <div >
             <button className="green darken-4">Send OTP</button>
         </div>
         <p></p>
         <h6 className="center">{labels.OTP.DIVIDER_OR}</h6>
         <p></p>
         <div className="center">
         <button onClick={()=>setLoginOtp(true)} className="green darken-4">Login with Email</button>
     </div>
     </form>
    </div>
  )
}

export default LoginWithOTP