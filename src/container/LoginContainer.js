import React,{useState} from "react";
import LoginWithOTP from "../components/LoginWithOTP";
import LoginSignup from '../components/LoginSignup'

 const Login=(props)=>{
    const [loginWithOtp,setLoginWithOtp]=useState(false);

    const loginWithOTP = () =>
    setLoginWithOtp( prevState =>!prevState)
    if(loginWithOtp){
        return <LoginWithOTP setLoginWithOtp={loginWithOTP}/>
    }   
        return <LoginSignup setLoginWithOtp={loginWithOTP}/>
  }
export default Login