//it will checks the conditions for the Password
import labels from '../config/labels'
export default function ValidateContainer(values){
    let errors ={}
    if(values.password.length < 6){
        errors.password=<p style={{color:"red"}}>{labels.VAL_CONTAINER.PASSWORD_MUST_BE}</p>
    }
return errors;
}


