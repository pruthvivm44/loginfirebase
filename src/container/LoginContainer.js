import React,{useState} from "react";
import LoginWithOTP from "../components/LoginWithOTP";
import labels from '../config/labels'
import {Link} from 'react-router-dom'
import validate from '../components/ValidateContainer'
import UseForm from '../components/UseForm'

 const Login=(props)=>{
    const{ handleChange,values,handleSubmit,errors}=UseForm(validate);
    const [loginWithOtp,setLoginWithOtp]=useState(false);

    const loginWithOTP = () =>
    setLoginWithOtp( prevState =>!prevState)
    if(loginWithOtp){
        return <LoginWithOTP setLoginWithOtp={loginWithOTP}/>
    }   
    return(
        <div className="container white">
            
            <form className="text-box" onSubmit={handleSubmit}>
                    
                <h5 className="Left">Login</h5>
                    <input 
                    type="text" name="username" placeholder="Enter email" id="username" value={values.username} onChange={handleChange}/>
                     {errors.username && <p>{errors.username}</p>}
                    <p className="message" style={{color:'black'}}>{labels.LOGINCONTAINER.NEVER_SHARE_YOUR_DETAILS}</p>
                    
                    <input 
                    type="password" name="password" placeholder="Password" id="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                    <p className="message center" style={{color:'black'}}>{labels.LOGINCONTAINER.DONT_HAVE_ACCNT} <a href=''>{labels.LOGINCONTAINER.CREATE_NEW_ACCOUNT}</a></p>
                    
                    <div>
                     <button  onClick={()=>setLoginWithOtp(loginWithOTP)}   className="blue darken-3">{labels.LOGINCONTAINER.LOGIN_THROUGH_OTP}</button>
                    </div>
                     <button className="green darken-4">{labels.LOGINCONTAINER.AFTER_FILLED_ALL_DETAILS}</button>
                     <Link to="/">
                     <span><button className="blue darken-3 right">{labels.LOGINCONTAINER.CLOSE_LOGINSIGNUP_PAGE}</button></span>
                    </Link>
        </form>
    </div>   
    )
  }
export default Login