import React from 'react'
import {Link } from 'react-router-dom'
import labels from '../config/labels'
import UseForm2 from './UseForm2'
import validate2 from './ValidateEmail'
import LoginWithOTP from './LoginWithOTP'

const LoginWithEmail=(props)=> {
  const{handleChange,values,handleSubmit,errors}=UseForm2(validate2);
  const {loginWithOtp,setLoginWithOtp} = props;
     
    if(loginWithOtp){
      return <LoginWithOTP />
    }
    return (
    <div className="container white" >
     <form className="text-box">
         <h5 className="Left">Login</h5>
         <input type="text-box" name="emailid" placeholder="Email Id" id="emailid" value={values.emailid} onChange={handleChange}/>
         {errors.emailid && <p>{errors.emailid}</p>}
         <div>
            <p></p>
            <input type="text-box password" name="password1" placeholder="Password" id="password1" value={values.password1} onChange={handleChange}/>
            {errors.password1 && <p>{errors.password1}</p>}
            <p></p>
                    <div>
                    <button onClick={handleSubmit} className="green darken-4">{labels.LOGINWITHEMAIL.AFTER_FILLED_ALL_DETAILS}</button>
                    </div>
                    <p></p>
        
        <h6 className="center">{labels.LOGINWITHEMAIL.DIVIDER_OR}</h6>
        <p></p>
        <div className="center">
        <button onClick={()=>setLoginWithOtp()} className="green darken-4">{labels.LOGINWITHEMAIL.LOGIN_THROUGH_OTP}</button>
        </div>
        <div className="center">
        <p>{labels.LOGINWITHEMAIL.DONT_HAVE_ACCNT} <a href="/">{labels.LOGINWITHEMAIL.CLICK_HERE_TO_REGISTER}</a></p>
        </div>
        <p></p>
        <div>
                    <Link to='/'>
                        <button className="blue darken-4 right">{labels.LOGINWITHEMAIL.CLICK_HERE_TO_CLOSE}</button>
                        </Link>
                    </div>
        </div>
     </form>
    </div>
  )
}

export default LoginWithEmail