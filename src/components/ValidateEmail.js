//it will checks the conditions for EmailID and Password
import labels from '../config/labels'
export default function ValidateEmail(values){
    let errors={}
    if(!values.emailid.trim()){
        errors.emailid=<p style={{ color: "red" }}>{labels.VAL_EMAIL.ENTER_EMAIL_ID}</p>
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.emailid)){
    errors.emailid=<p style={{color:"red"}}>{labels.VAL_EMAIL.INVALID_EMAIL} 
    <span style={{color:"blue"}}>{labels.VAL_EMAIL.ENTER_EMAIL_IN_CORRECT_FORMAT}</span></p>
    }
    
    if(!values.password1){
        errors.password1=<p style={{ color: "red" }}>{labels.VAL_EMAIL.ENTER_YOUR_PASSWORD}</p>
    }else if(values.password1.length < 6){
        errors.password1=<p style={{color:"red"}}>{labels.VAL_EMAIL.PWD_MUST_HAVE}</p>
    }
     else if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.password1)){
        errors.password1=<p style={{color:"blue"}}>{labels.VAL_CONTAINER.PASSWORD_INCLUDES}<p style={{color:"red"}}>{labels.VAL_CONTAINER.PASSWORD_CONTAINS}</p></p>
    }
    return errors;
    }
    