import React from 'react';
import UserEmailValues from './UserEmailValues'; 
import {Link} from 'react-router-dom'
import {useState} from 'react';
import validate from './ValidateSignup'
import labels from '../config/labels';
import {useAuth} from '../contexts/AuthContext'
import {auth} from '../firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth';
const LoginSignup=(props)=>{
// const{ handleChange,values,handleSubmit,errors}=UserEmailValues(validate);
const {setLoginWithOtp} = props;
// const {signup} =useAuth()

const [signupEmail,setSignupEmail]=useState("");
const [signupPassword,setSignupPassword]=useState("");
const signup= async (e)=>{
    e.preventDefault();
    try{
    const user = await createUserWithEmailAndPassword(
    auth,
    signupEmail,
    signupPassword
    );
    console.log(signupEmail)
    alert('User is Verified')
    }catch(error){
        console.log(error.message);
    }
}

return(
    <div className="container white">
        
        <form className="text-box">
                
            <h5 className="Left">Login</h5>
                <input 
                // type="text" name="username" placeholder="Enter email" id="username" value={values.username} onChange={handleChange}/>
                //  {errors.username && <p>{errors.username}</p>}
                 type="text" name="username" placeholder="Enter email" id="username" onChange={(event)=>{setSignupEmail(event.target.value)}}/>
                <p className="message" style={{color:'black'}}>{labels.LOGINSIGNUP.NEVER_SHARE_YOUR_DETAILS}</p>
                
                <input 
                // type="password" name="password" placeholder="Password" id="password" value={values.password} onChange={handleChange}/>
                // {errors.password && <p>{errors.password}</p>}
                type="password" name="password" placeholder="Password" id="password" onChange={(event)=>{setSignupPassword(event.target.value)}}/>
                <p className="message center" style={{color:'black'}}>{labels.LOGINSIGNUP.DONT_HAVE_ACCNT} <a href='/login'>{labels.LOGINSIGNUP.CREATE_NEW_ACCOUNT}</a></p>
                
                <div>
                 <button type='button' onClick={()=>setLoginWithOtp(true)}   className="blue darken-3">{labels.LOGINSIGNUP.LOGIN_THROUGH_OTP}</button>
                </div>
                 <button type='submit' onClick={signup} className="green darken-4">{labels.LOGINSIGNUP.AFTER_FILLED_ALL_DETAILS}</button>
                <div> <Link to="/">
                 <span><button className="blue darken-3 right">{labels.LOGINSIGNUP.CLOSE_LOGINSIGNUP_PAGE}</button></span>
                </Link></div>
    </form>
</div>   
)
    }
export default LoginSignup