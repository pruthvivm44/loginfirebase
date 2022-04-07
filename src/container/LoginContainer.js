import React,{useState} from "react";
import LoginWithEmail from "../components/LoginWithEmail";
 import LoginSignup from "../components/LoginSignup";
import LoginWithOTP from "../components/LoginWithOTP";


 const Login=(props)=>{
  
  console.log('props',props)
 const [loginWithOtp,setLoginWithOtp]=useState(false);
 const [dontHavAcnt,setDontHavacnt]=useState(false);
 
 

//otp
const loginWithOTP = () =>
setLoginWithOtp( prevState =>!prevState)
console.log('loginWithOtp',loginWithOtp);
if(loginWithOtp){
    return <LoginWithOTP setLoginWithOtp={loginWithOtp}/>
}

//email
const dontHavacnt = () =>
setDontHavacnt( prevState =>!prevState)
console.log('dontHavAcnt',dontHavAcnt)

    if(dontHavAcnt)
    {
        return <LoginWithEmail setDontHavAcnt={dontHavacnt}/>
        
    }
   return <LoginSignup  setLoginWithOtp={loginWithOTP}  setDontHavacnt={dontHavacnt} />   
}
export default Login