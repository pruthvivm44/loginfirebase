export default function validateInfo1(values){
    let errors ={}
    
    if(!values.phonenumber.trim()){
        errors.phonenumber=<p style={{color:"red"}}>Please Enter your Phone Number</p>
    }
    if(values.phonenumber.length < 10){
        errors.phonenumber=<p style={{color:"red"}}>PhoneNumbers Must be 10 Numbers</p>
    }
    
    
    if(values.phonenumber.length > 10){
        errors.phonenumber=<p style={{color:"red"}}>PhoneNumbers not more than 10 Numbers</p>
    }

    
    return errors;
}