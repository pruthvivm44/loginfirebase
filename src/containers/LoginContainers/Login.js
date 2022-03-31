import React,{useState} from "react";
import Email from "../../components/Email";
 
import LoginSignup from "../../components/LoginSignup";
import Otp from "../../components/Otp";


 const Login=(props)=>{
  
  console.log('props',props)
 const [LoginWithOtp,setLoginWithOtp]=useState(false);
 const [dontHavAcnt,setDontHavacnt]=useState(false);
 
 

//otp
const loginWithOTP = () =>
setLoginWithOtp( prevState =>!prevState)
console.log('loginWithOtp',LoginWithOtp);
if(LoginWithOtp){
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