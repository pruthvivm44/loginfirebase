export default function validateInfo(values){
    let errors ={}
    
    //#username
    //No values in the username it shows Username required
    if(!values.username.trim()){
        errors.username="Username required"
    }
    

    if(!values.password){
        errors.password="Password is Required"
    }else if(values.password.length < 6){
        errors.password=<p style={{color:"red"}}>Password must be atleast 8 characters</p>
    }
return errors;
}


