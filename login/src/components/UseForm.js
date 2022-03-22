import { useState,useEffect } from 'react';
const UseForm= validate =>{
    const [ values,setValues ]=useState({
        //these are the id's of Login_Signup
        username:'',
        password:''
    })
     const [errors,setErrors]=useState({});

    const handleChange= e =>{
        const{ name,value }=e.target;
        setValues({
            ...values,
            //it target the names in Login_Signup
            [name]:value
        });
    };
    const handleSubmit=e=>{
        e.preventDefault();
        setErrors(validate(values));
    }
return{handleChange,values,handleSubmit,errors};

};
export default UseForm;