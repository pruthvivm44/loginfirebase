import React,{useState} from "react";
import Email from "../../components/Email";
// import Log1 from "../../components/Log1";
 
import LoginSignup from "../../components/LoginSignup";
import Otp from "../../components/Otp";


 const Login=(props)=>{
  
  console.log('props',props)
 const [loginWithOtp,setLoginWithOtp]=useState(false);
 const [dontHavAcnt,setDontHavacnt]=useState(false);
 
 

//otp
const loginWithOTP = () =>
setLoginWithOtp( prevState =>!prevState)
console.log('loginWithOtp',loginWithOtp);
if(loginWithOtp){
    return <Otp/>
}

//email
const dontHavacnt = () =>
setDontHavacnt( prevState =>!prevState)
console.log('dontHavAcnt',dontHavAcnt)

    if(dontHavAcnt)
    {
        return <Email setLoginWithOtp={loginWithOTP}/>
        
    }
   return <LoginSignup  setLoginWithOtp={loginWithOTP}  setDontHavacnt={dontHavacnt} />   
}
export default Login