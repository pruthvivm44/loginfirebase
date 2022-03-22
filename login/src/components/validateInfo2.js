export default function validateInfo2(values){
let errors={}
if(!values.emailid.trim()){
    errors.emailid=<p style={{ color: "red" }}>Please Enter Your Email id</p>
}
else if(!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.emailid)){
errors.emailid=<p style={{color:"red"}}>Invalid Email id  ! 
<span style={{color:"blue"}}>(Please Enter Correct Format)</span></p>
}
if(!values.password1){
    errors.password1=<p style={{ color: "red" }}>Please Enter Your Password</p>
}else if(values.password1.length < 6){
    errors.password1=<p style={{color:"red"}}>Password must be atleast 8 characters"</p>
}
return errors;
}
