//validating otp while user logging with Phone number
import { useState } from 'react'
const UseForm1=validate1=>{
    const[values,setValues]=useState({
        phonenumber:""
    })
    const [errors,setErrors]=useState({});
    
    const handleChange= e =>{
        const{ name,value }=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
        const handleSubmit=e=>{
            e.preventDefault();
            setErrors(validate1(values));
        }
    return{handleChange,values,handleSubmit,errors};
};
export default UseForm1;