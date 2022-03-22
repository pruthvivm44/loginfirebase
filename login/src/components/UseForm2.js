import {useState} from 'react'
const UseForm2=validate2=>{
const[values,setValues]=useState({
    emailid:'',
    password1:''

})
const[errors,setErrors]=useState({});

const handleChange=e=>{
    const{name,value}=e.target;
    setValues({
        ...values,
        [name]:value
    });
};
const handleSubmit=e=>{
    e.preventDefault();
    setErrors(validate2(values));
}
return{handleChange,values,handleSubmit,errors};
};
export default UseForm2;
