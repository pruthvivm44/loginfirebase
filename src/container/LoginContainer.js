import React,{useState} from "react";
import LoginWithEmail from "../components/LoginWithEmail";
import LoginWithOTP from "../components/LoginWithOTP";
import labels from '../config/labels'
import {Link} from 'react-router-dom'
import validate from '../components/ValidateContainer'
import UseForm from '../components/UseForm'

 const Login=(props)=>{
    const{ handleChange,values,handleSubmit,errors}=UseForm(validate);
    const [loginWithOtp,setLoginWithOtp]=useState(false);
    const [loginWithEmail,setLoginWithEmail]=useState(false);

    const loginWithOTP = () =>
    setLoginWithOtp( prevState =>!prevState)
    if(loginWithOtp){
        return <LoginWithOTP setLoginWithOtp={loginWithOTP}/>
    }
    
    const loginWithEMAIL = () =>
    setLoginWithEmail( prevState =>!prevState)
        if(loginWithEmail){
        return <LoginWithEmail setDontHavAcnt={loginWithEMAIL}/>
    }    
    return(
        <div className="container white">
            
            <form className="text-box" onSubmit={handleSubmit}>
                    
                <h5 className="Left">Login</h5>
                    <input 
                    type="text" name="username" placeholder="Enter email / Phone number" id="username" value={values.username} onChange={handleChange} required/>
                    <p className="message">{labels.LOGINCONTAINER.NEVER_SHARE_YOUR_DETAILS}</p>
                    {errors.username && <p>{errors.username}</p>}
                    
                    <input 
                    type="password" name="password" placeholder="Password" id="password" value={values.password} onChange={handleChange} required/>
                    {errors.password && <p>{errors.password}</p>}
                    <p className="message center">{labels.LOGINCONTAINER.DONT_HAVE_ACCNT}<button onClick={()=>setLoginWithEmail(loginWithEMAIL)} className="green right" >{labels.LOGINCONTAINER.CREATE_NEW_ACCOUNT}</button></p>
                    
                    <div>
                     <button  onClick={()=>setLoginWithOtp(loginWithOTP)}   className="blue darken-3">{labels.LOGINCONTAINER.LOGIN_THROUGH_OTP}</button>
                    </div>
                     <button className="green darken-4 ">{labels.LOGINCONTAINER.AFTER_FILLED_ALL_DETAILS}</button>
                     <Link to="/">
                     <span><button className="blue darken-3 right">{labels.LOGINCONTAINER.CLOSE_LOGINSIGNUP_PAGE}</button></span>
                    </Link>
        </form>
    </div>
        
    )
  }
export default Login